  import "@wamra/gantt-task-react/dist/style.css";
  import { Column, Gantt, Task  as DefaultTask, ViewMode, Task } from '@wamra/gantt-task-react';

  import { ru } from "date-fns/locale";
import { useState } from "react";

  interface CustomTask extends DefaultTask {
    executor?: string;
    dateAP?: string;
    album?: string;
    albumName?: string;
  }

  const columns: Column[] = [
    {
      id: "name",
      title: "Стадия/направление/комплект",
      width: 212,
      Cell: ({ data }) => <>{data.task.name}</>,
    },
    {
      id: "album",
      title: "Альбом",
      width: 98,
      Cell: ({ data }) => <>{data.task.album || "-"}</>,
    },
    {
      id: "albumName",
      title: "Наименование альбома",
      width: 220,
      Cell: ({ data }) => <>{data.task.albumName || "-"}</>,
    },
    {
      id: "executor",
      title: "Исполнитель",
      width: 140,
      Cell: ({ data }) => <>{data.task.executor || "-"}</>,
    },
    {
      id: "dateAP",
      title: (
        <div style={{ display: "flex", flexDirection: "column", textAlign: "center" }}>
          <>Сроки АП v.0</>
          <span style={{ fontSize: 14, color: "#8C8C8C" }}>Дата выдачи</span>
        </div>
      ),
      width: 140,
      Cell: ({ data }) => <>{data.task.dateAP || "-"}</>,
    },
  ];
    
  const initialTasks: CustomTask[] = [
    {
      start: new Date(2024, 9, 1),
      end: new Date(2025, 6, 1),
      name: 'РД',
      id: '123',
      type: "project",
      progress: 100, // Обязательное поле
      executor: 'ФСК Проект',
      dateAP: '01.06.2025',
      isDisabled: true,
      styles: { barProgressColor: '#F9883E' },
      hideChildren: false, // По умолчанию задачи раскрыты
    },
    {
      start: new Date(2024, 9, 1),
      end: new Date(2025, 2, 1),
      name: "Разработка чертежей",
      id: "123-1",
      type: "task",
      progress: 50, // Обязательное поле
      dependencies: [
        {
          sourceId: "123", // Зависит от задачи "123"
          sourceTarget: "endOfTask", // Зависит от конца задачи-источника
          ownTarget: "startOfTask", // Зависит от начала текущей задачи
        },
      ],
      parent: "123", // Указываем родительскую задачу
    },
    {
      start: new Date(2025, 2, 2),
      end: new Date(2025, 6, 1),
      name: "Согласование и утверждение",
      id: "123-2",
      type: "task",
      progress: 30, // Обязательное поле
      dependencies: [
        {
          sourceId: "123", // Зависит от задачи "123"
          sourceTarget: "endOfTask", // Зависит от конца задачи-источника
          ownTarget: "startOfTask", // Зависит от начала текущей задачи
        },
      ],
      parent: "123", // Указываем родительскую задачу
    },
    {
      start: new Date(2025, 0, 1),
      end: new Date(2025, 7, 1),
      name: "ПД",
      id: "1234",
      type: 'project',
      progress: 100, // Обязательное поле
      executor: "Проектная группа",
      dateAP: "01.07.2025",
      isDisabled: true,
      styles: { barProgressColor: '#F9883E' },
      hideChildren: false, // По умолчанию задачи раскрыты
    },
    {
      start: new Date(2025, 0, 1),
      end: new Date(2025, 3, 1),
      name: "Предпроектные исследования",
      id: "1234-1",
      type: "task",
      progress: 20, // Обязательное поле
      parent: "1234", // Указываем родительскую задачу
    },
    {
      start: new Date(2025, 3, 2),
      end: new Date(2025, 7, 1),
      name: "Проектирование",
      id: "1234-2",
      type: "task",
      progress: 40, // Обязательное поле
      parent: "1234", // Указываем родительскую задачу
    },
  ];


  export const GantPrototype = (): JSX.Element => {
    const [tasks, setTasks] = useState<CustomTask[]>(initialTasks);

    // Обработчик для раскрытия/сворачивания задач
    const handleExpandClick = (task: CustomTask) => {
      const updatedTasks = tasks.map((t) => {
        if (t.id === task.id) {
          return { ...t, hideChildren: !t.hideChildren }; // Меняем состояние hideChildren
        }
        return t;
      });
  
      setTasks(updatedTasks); // Обновляем состояние задач
    };


    return (
      <>
      <Gantt
          viewMode={ViewMode.Month}
          viewDate={new Date(2024, 0, 1)}
          tasks={initialTasks}
          dateLocale={ru}
          columns={columns}
          onChangeExpandState={handleExpandClick}
        />

      </>
    );
  };