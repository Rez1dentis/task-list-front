import './Main.scss';
import { Checkbox, FormControlLabel, FormGroup } from '@mui/material';
import { HiOutlinePlus } from 'react-icons/hi';

export const Main = (): JSX.Element => {
  return (
    <div className="mainContainer">
      <div className="header">
        <div className="title">
          <text>Task List</text>
        </div>
        <div className="icon">
          <HiOutlinePlus style={{ width: 45, height: 45, color: 'white', cursor: 'pointer' }} />
        </div>
      </div>
      <div className="tasksContainer">
        <ul>
          <li className="listItem">
            <FormGroup>
              <FormControlLabel control={<Checkbox defaultChecked color="success" />} label="" />
            </FormGroup>
            что-то сделать
          </li>
        </ul>
      </div>
    </div>
  );
};
