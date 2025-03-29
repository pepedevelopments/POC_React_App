import React, { useState } from 'react';
import { Button, DatePicker, Modal, Select, Table, TableProps } from 'antd';
import './Tableau.css';
import { AnyObject } from 'antd/es/_util/type';
import dayjs from 'dayjs'

interface TableauProps {
  month: number;
}

enum ConstraintType {
  ONLY_DAY = "ONLY_DAY",
  ONLY_NIGHT = "ONLY_NIGHT",
  PTO = "PTO",
  SICK = "SICK",
  TRAINING = "TRAINING",
  OFF = "OFF",
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

const initialConstraints: Constraint[] = [
    {
        employeeId: 0,
        date: new Date("2025-09-01"),
        type: ConstraintType.ONLY_DAY
    }
]

const Tableau = ({ month }: TableauProps) => {
  const [constraints, setConstraints] = useState<Constraint[]>(initialConstraints);
  const [modalState, setModalState] = useState<ModalState>({ show: false });


  const daysInMonth = new Date(new Date().getFullYear(), month + 1, 0).getDate();

  const getDayOfWeek = (date: Date) => {
    return date.toLocaleDateString('fr-FR', { weekday: 'long' }).slice(0, 1).toUpperCase();
  };

  const getConstraint = (employeeId: number, date: Date) => {
    const constraint = constraints?.find((c: Constraint) => c.employeeId === employeeId && c.date.toISOString() === date.toISOString());
    if (!constraint) return;
    return {
      [ConstraintType.ONLY_DAY]: "J",
      [ConstraintType.ONLY_NIGHT]: "N",
      [ConstraintType.PTO]: "C",
      [ConstraintType.SICK]: "M",
      [ConstraintType.TRAINING]: "F",
      [ConstraintType.OFF]: "A",
    }[constraint.type];
  };

  console.log("modal", modalState);

  const dates = Array(daysInMonth).fill(null).map((_, index) => 
    new Date(Date.UTC(new Date().getFullYear(), month, index + 1))
  );

  const columns: TableProps['columns'] = [
    {
      title: 'Employé',
      dataIndex: 'name',
      key: 'name',
      fixed: 'left',
      width: 200,
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
      onCell: (record: AnyObject) => {
        return {
          onClick: () => setModalState({
            employeeId: record.id,
            show: true,
            date: date,
          }),
        };
      },
      render: (_: string, record: AnyObject) => {
        const constraint = getConstraint(record.id, date);
        return (
          <div className={`constraint-cell ${constraint?.toLowerCase()}`}>
            {constraint === "A" ? "" : constraint}
          </div>
        );
      }
    }))
  ];

  const handleOk = () => {
    if (!modalState.employeeId || !modalState.date || !modalState.type) return;
    setConstraints([
      ...constraints,
      {
        employeeId: modalState.employeeId!,
        date: modalState.date!,
        type: modalState.type!,
      },
    ]);
    setModalState({
      show: false,
    });
  };

  const handleCancel = () => {
    setModalState({
      show: false,
    });
  };

  return (
    <div style={{ width: '100%' }}>
      <Table columns={columns} dataSource={people} bordered pagination={false} />
      <Modal
        title="Ajouter un évènement"
        open={modalState.show}
        onOk={handleOk}
        onCancel={handleCancel}
        width={300}
      >
        <div className="modal-label">Évènement</div>
        <Select
          style={{ width: '100%' }}
          onChange={(value) => {
            setModalState({
              ...modalState,
              type: value,
            });
          }}
        >
          <Select.Option value="J">Seulement Jour</Select.Option>
          <Select.Option value="N">Seulement Nuit</Select.Option>
          <Select.Option value="C">Congé</Select.Option>
          <Select.Option value="M">Arrêt Maladie</Select.Option>
          <Select.Option value="F">Formation</Select.Option>
          <Select.Option value="A">Absent</Select.Option>
        </Select>
        <div className="modal-label">Jusqu'au</div>
        <DatePicker
          style={{ width: '100%' }}
          format="DD/MM/YYYY"
          minDate={modalState.date ? dayjs(modalState.date) : undefined}
          onChange={(date) => {
            const day = new Date(Date.UTC(date.get("year"), date.get("month"), date.get("day")));
            setModalState({
              ...modalState,
              until: day,
            });
          }}
        />
      </Modal>
      <Button>Générer</Button>
    </div>
  );
};

export default Tableau;