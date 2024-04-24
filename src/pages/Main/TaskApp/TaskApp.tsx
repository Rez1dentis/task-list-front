import './TaskApp.scss';
import { CiEdit } from 'react-icons/ci';
import { TiDeleteOutline } from 'react-icons/ti';
import { Checkbox, FormControlLabel, FormGroup } from '@mui/material';

export const TaskApp = (): JSX.Element => {
  return (
    <>
      <ul>
        <li className="listItem">
          <FormGroup>
            <FormControlLabel control={<Checkbox defaultChecked color="success" />} label="" />
          </FormGroup>
          <div className="text">что-то сделать</div>
          <div className="iconsBlock">
            <CiEdit style={{ marginRight: 15 }} />
            <TiDeleteOutline />
          </div>
        </li>
      </ul>
    </>
  );
};
