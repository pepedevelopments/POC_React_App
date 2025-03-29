import React, { useState } from 'react';
import { Button, DatePicker, Modal, notification, Select, Table, TableProps, Tooltip } from 'antd';
import './Tableau.css';
import { AnyObject } from 'antd/es/_util/type';
import dayjs from 'dayjs'
import axios from 'axios';
import { constraints2, planning2 } from './planning2';
import { ConstraintType } from './shared';
import { constraints1, planning1 } from './planning1';

interface TableauProps {
  month: number;
}

enum ShiftType {
  DAY = "DAY",
  NIGHT = "NIGHT",
}

interface Constraint {
  employeeId: number;
  date: Date;
  type: ConstraintType;
}

interface Person {
  id: number;
  name: string;
  position: string;
}

interface ModalState {
  employeeId?: number;
  show: boolean;
  date?: Date;
  type?: ConstraintType;
  until?: Date;
}

const people: Person[] = [
  {
      "id": 0,
      "name": "Marie Dubois",
      "position": "IDE"
  },
  {
      "id": 1,
      "name": "Thomas Lefevre",
      "position": "IDE"
  },
  {
      "id": 2,
      "name": "Sofia Almeida",
      "position": "IDE"
  },
  {
      "id": 3,
      "name": "Julien Robert",
      "position": "IDE"
  },
  {
      "id": 4,
      "name": "Sophie Bernard",
      "position": "IDE"
  },
  {
      "id": 5,
      "name": "Laila Haddad",
      "position": "IDE"
  },
  {
      "id": 6,
      "name": "Claire Martin",
      "position": "IDE"
  },
  {
      "id": 7,
      "name": "Lisa Lambert",
      "position": "IDE"
  },
  {
      "id": 8,
      "name": "Élise Fontaine",
      "position": "IDE"
  },
  {
      "id": 9,
      "name": "Francine Roberta",
      "position": "IDE"
  },
  {
      "id": 10,
      "name": "Aïcha Benkacem",
      "position": "AS"
  },
  {
      "id": 11,
      "name": "Camille Morel",
      "position": "AS"
  },
  {
      "id": 12,
      "name": "Demba Ndiaye",
      "position": "AS"
  },
  {
      "id": 13,
      "name": "Léa Garnier",
      "position": "AS"
  },
  {
      "id": 14,
      "name": "Alice Durand",
      "position": "AS"
  }
]

interface PlanningEmployee {
  id: number;
  name: string;
  position: string;
  shift: ShiftType;
}

interface PlanningEntry {
  date: string;
  employees: PlanningEmployee[];
}

const initialConstraints: Constraint[] = [
    {
        employeeId: 0,
        date: new Date("2025-09-01"),
        type: ConstraintType.NOT_DAY
    }
]

const Tableau = ({ month }: TableauProps) => {
  const [constraints, setConstraints] = useState<Constraint[]>([]);
  const [modalState, setModalState] = useState<ModalState>({ show: false });
  const [isGenerating, setIsGenerating] = useState(false);
  const [planning, setPlanning] = useState<PlanningEntry[]>([]);
  const [generateIdx, setGenerateIdx] = useState(0);
  const [warning, setWarning] = useState<string>();

  const [notificationApi, notificationContextHolder] = notification.useNotification();

  const daysInMonth = new Date(new Date().getFullYear(), month + 1, 0).getDate();

  const getDayOfWeek = (date: Date) => {
    return date.toLocaleDateString('fr-FR', { weekday: 'long' }).slice(0, 1).toUpperCase();
  };

  const getConstraint = (employeeId: number, date: Date) => {
    const constraint = constraints?.find((c: Constraint) => c.employeeId === employeeId && c.date.toISOString() === date.toISOString());
    if (!constraint) return;
    return constraint;
  };

  const getPrettyConstraint = (constraint: ConstraintType) => {
    return {
      [ConstraintType.NOT_DAY]: "Journée",
      [ConstraintType.NOT_NIGHT]: "Nuit",
      [ConstraintType.PTO]: "C",
      [ConstraintType.SICK]: "M",
      [ConstraintType.TRAINING]: "F",
    }[constraint];
  };
  
  const getShift = (employeeId: number, date: Date) => {
    const planningEntry = planning.find(p => p.date === date.toISOString().split("T")[0]);
    if (!planningEntry) return;
    const shift = planningEntry.employees.find(e => e.id === employeeId)?.shift;
    if (!shift) return;
    return {
      [ShiftType.DAY]: "J",
      [ShiftType.NIGHT]: "N",
    }[shift];
  };

  const dates = Array(daysInMonth).fill(null).map((_, index) => 
    new Date(Date.UTC(new Date().getFullYear(), month, index + 1))
  );

  const columns: TableProps['columns'] = [
    {
      title: 'Employé',
      dataIndex: 'name',
      key: 'name',
      fixed: 'left',
      width: 300,
      className: 'employee-cell',
    },
    ...dates.map((date) => ({
      title: (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <span>{getDayOfWeek(date)}</span>
          <span>{date.getDate()}</span>
        </div>
      ),
      dataIndex: `day${date.getDate()}`,
      key: `day${date.getDate()}`,
      width: 50,
      className: 'day-cell',
      onHeaderCell: () => {
        return {
          style: {
            borderLeft: date.getDay() === 6 ? "1px solid black" : "none",
            borderRight: date.getDay() === 0 ? "1px solid black" : "none",
          },
        };
      },
      onCell: (record: AnyObject) => {
        return {
          onClick: () => setModalState({
            employeeId: record.id,
            show: true,
            date: date,
            until: date,
          }),
          style: {
            borderLeft: date.getDay() === 6 ? "1px solid black" : "none",
            borderRight: date.getDay() === 0 ? "1px solid black" : "none",
          },
        };
      },
      render: (_: string, record: AnyObject) => {
        const constraint = getConstraint(record.id, date);
        const prettyConstraint = constraint && getPrettyConstraint(constraint.type);
        const shift = getShift(record.id, date);
        if (constraint && [ConstraintType.NOT_DAY, ConstraintType.NOT_NIGHT].includes(constraint.type)) {
          return (
            <Tooltip title={`${prettyConstraint} non travaillée demandée`}>
              <div className={`position-cell ${shift?.toLowerCase()} constraint-cell ask`}>
                <span />
                {shift || ' '}
              </div>
            </Tooltip>
          );
        }
        if (constraint) {
          return (
            <div className={`constraint-cell ${prettyConstraint?.toLowerCase()}`}>
              {prettyConstraint}
            </div>
          );
        }
        if (shift) {
          return (
            <div className={`position-cell ${shift?.toLowerCase()}`}>
              {shift}
            </div>
          );
        }
        if (constraint) {
          return (
            <div className={`constraint-cell ${prettyConstraint?.toLowerCase()}`}>
              {prettyConstraint}
            </div>
          );
        }
      }
    }))
  ];

  const hideModal = () => {
    setModalState({
      employeeId: undefined,
      show: false,
      date: undefined,
      type: undefined,
      until: undefined,
    });
  };

  const handleOk = () => {
    if (modalState.employeeId === undefined || modalState.date === undefined || modalState.until === undefined || modalState.type === undefined) return;
    const startDate = new Date(modalState.date);
    const endDate = new Date(modalState.until);
    let ctrs = [...constraints];
    for (let date = startDate; date <= endDate; date.setDate(date.getDate() + 1)) {
      ctrs = ctrs.filter((c: Constraint) => c.employeeId !== modalState.employeeId || c.date.toISOString() !== date.toISOString());
      ctrs.push({
        employeeId: modalState.employeeId!,
        date: new Date(date),
        type: modalState.type!,
      });
    }
    if (generateIdx === 1) {
      setWarning("Attention, votre planning est invalide");
    }
    setConstraints(ctrs);
    hideModal();
  };

  const generateSchedule = async () => {
    setIsGenerating(true);
    setTimeout(() => {
      if (generateIdx === 0) {
        setPlanning(planning1);
        setConstraints(constraints1);
      } else {
        setPlanning(planning2);
        setConstraints(constraints2);
      }
      setWarning(undefined);
      setGenerateIdx(generateIdx + 1);
      setIsGenerating(false);
    }, 500);
    if (generateIdx < 4) return;
    setIsGenerating(true);
    try {
      const res = await axios.post("http://localhost:3000/engine/generate", {
        from: `2025-${(month + 1).toString().padStart(2, '0')}-01`,
        to: `2025-${(month + 1).toString().padStart(2, '0')}-${daysInMonth}`,
        employees: people,
        constraints: constraints,
      });
      if (!res.data.success) {
        notificationApi.error({
          message: "Erreur lors de la génération du planning",
          description: res.data.error,
        });
      }
      setPlanning(res.data.planning);
    } catch (err) {
      console.log("err", err);
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div style={{ width: '100%' }}>
      {notificationContextHolder}
      <Table columns={columns} dataSource={people} bordered pagination={false} />
      <Modal
        title="Ajouter un évènement"
        open={modalState.show}
        onOk={handleOk}
        onCancel={hideModal}
        cancelText="Annuler"
        okText="Ajouter"
        width={300}
      >
        <div className="modal-label">Évènement</div>
        <Select
          style={{ width: '100%' }}
          value={modalState.type}
          onChange={(value) => {
            setModalState({
              ...modalState,
              type: value,
            });
          }}
        >
          <Select.Option value="PTO" style={{ backgroundColor: "#1B263B", color: "white" }}>Congé</Select.Option>
          <Select.Option value="SICK" style={{ backgroundColor: "#AECBB8" }}>Arrêt Maladie</Select.Option>
          <Select.Option value="TRAINING" style={{ backgroundColor: "#FFBD8E" }}>Formation</Select.Option>
          <Select.Option value="NOT_DAY">Absence Jour</Select.Option>
          <Select.Option value="NOT_NIGHT">Absence Nuit</Select.Option>
        </Select>
        <div className="modal-label">Jusqu'au</div>
        <DatePicker
          style={{ width: '100%' }}
          format="DD/MM/YYYY"
          minDate={modalState.date ? dayjs(modalState.date) : undefined}
          value={modalState.until ? dayjs(modalState.until) : null}
          
          onChange={(_, dateString) => {
            const dateStrings = dateString.toString().split("/");
            const day = new Date(Date.UTC(Number(dateStrings[2]), Number(dateStrings[1]) - 1, Number(dateStrings[0])));
            setModalState({
              ...modalState,
              until: day,
            });
          }}
        />
      </Modal>
      <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
        <Button loading={isGenerating} onClick={generateSchedule}>Générer</Button>
        <div style={{ color: "red", fontSize: 14 }}>{warning}</div>
      </div>
    </div>
  );
};

export default Tableau;