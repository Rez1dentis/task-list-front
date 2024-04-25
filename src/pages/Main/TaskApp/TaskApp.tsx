import classes from './TaskApp.module.scss';
import { CiEdit } from 'react-icons/ci';
import { TiDeleteOutline } from 'react-icons/ti';
import { Checkbox, FormControlLabel, FormGroup } from '@mui/material';
import { useState } from 'react';
import { Reorder } from 'framer-motion';
import { ITask } from '../../../models/taskListModel';

export const TaskApp = (): JSX.Element => {
  const [tasks, setTasks] = useState<ITask[]>([
    { id: '1', name: 'потрахаться с мальчишками' },
    { id: '2', name: 'сделать куни' },
    { id: '3', name: 'пососать в Таркове бесплатно' },
    { id: '4', name: 'Послеобеденный римминг' },
    { id: '5', name: 'Посидеть на бутылке' },
    { id: '6', name: 'Выбрать стул (один из двух)' },
    { id: '7', name: 'посидеть на коленках у Деда' },
    { id: '8', name: 'покушать' },
    { id: '9', name: 'додо пицца' },
  ]);

  return (
    <>
      <Reorder.Group values={tasks} onReorder={setTasks}>
        {tasks.map((task) => (
          <Reorder.Item value={task} key={task.id}>
            <ul>
              <li className={classes.listItem}>
                <FormGroup>
                  <FormControlLabel
                    control={<Checkbox defaultChecked color="success" />}
                    label=""
                  />
                </FormGroup>
                <div className={classes.text}>{task.name}</div>
                <div className={classes.iconsBlock}>
                  <CiEdit style={{ marginRight: 15 }} />
                  <TiDeleteOutline />
                </div>
              </li>
            </ul>
          </Reorder.Item>
        ))}
      </Reorder.Group>
    </>
  );
};
