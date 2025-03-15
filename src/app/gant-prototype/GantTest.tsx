import { Gantt, Task, EventOption, StylingOption, ViewMode, DisplayOption } from '@wamra/gantt-task-react';
import "@wamra/gantt-task-react/dist/style.css";

// const columns = [
//   { key: 'name', title: 'Стадия/направление/комплект', width: 212 },
//   { key: 'album', title: 'Альбом', width: 98 },
//   { key: 'albumName', title: 'Наименование альбома', width: 220 },
//   { key: 'executor', title: 'Исполнитель', width: 140 },
//   { key: 'dateAP', title: 'Сроки АП v.0', width: 140 },
// ];

const initialTasks: CustomTask[] = [
    {
      start: new Date(2024, 9, 1),
      end: new Date(2025, 6, 1),
      name: 'РД',
      id: '123',
      type: "project",
      progress: 100,
      executor: 'ФСК Проект',
      dateAP: '01.06.2025',
      isDisabled: true,
      styles: {barProgressColor: '#F9883E'},
      hideChildren: false,
      children: [
        {
          start: new Date(2024, 9, 1),
          end: new Date(2025, 2, 1),
          name: "Разработка чертежей",
          id: "123-1",
          type: "task",
          dependencies: ["123"],
        },
        {
          start: new Date(2025, 2, 2),
          end: new Date(2025, 6, 1),
          name: "Согласование и утверждение",
          id: "123-2",
          type: "task",
          dependencies: ["123"],
        },
      ],
    },
    {
      start: new Date(2025, 0, 1), 
      end: new Date(2025, 7, 1), 
      name: "ПД",
      id: "1234",
      type: 'project',
      progress: 100,
      executor: "Проектная группа",
      dateAP: "01.07.2025",
      isDisabled: true,
      styles: {barProgressColor: '#F9883E'},
      hideChildren: false,
      children: [
        {
          start: new Date(2025, 0, 1),
          end: new Date(2025, 3, 1),
          name: "Предпроектные исследования",
          id: "1234-1",
          type: "task",
        },
        {
          start: new Date(2025, 3, 2),
          end: new Date(2025, 7, 1),
          name: "Проектирование",
          id: "1234-2",
          type: "task",
    
        },
      ],
    },
  ];

export const GantTest = (): JSX.Element => {
  return (
    <div>
    <Gantt tasks={initialTasks}/>
    </div>
  );
};