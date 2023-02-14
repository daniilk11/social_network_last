import React from 'react';
import s from './../Dialogs.module.css';
import { NavLink } from 'react-router-dom';

import Icona from '../../../assets/images/icons small/Icona.svg';
import Iconb from '../../../assets/images/icons small/Iconb.svg';
import Iconc from '../../../assets/images/icons small/Iconc.svg';
import Icond from '../../../assets/images/icons small/Icond.svg';
import Icone from '../../../assets/images/icons small/Icone.svg';
import Iconf from '../../../assets/images/icons small/Iconf.svg';
import Icong from '../../../assets/images/icons small/Icong.svg';

const Dialogitem = (props) => {
  let path = '/dialogs/' + props.id;
  return (
    <div className={' ' + s.active}>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  )
}
export default Dialogitem;