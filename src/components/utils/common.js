import React from 'react';
export const paginate = (max, pageFunc, perpage, pagination) => {
  let display = [];
  let styleA;
  let starting = 1;
  let limit = 5;
  if (pagination > 1) {
    starting = pagination;
    limit = limit + pagination;
  }
  const displayLimit = (max > limit) ? limit : max;
  const displayElipses = (max > limit);
  for(let i = starting; i<=displayLimit; i++ ) {
    styleA = {};
    if (pagination === i) {
      styleA = { fontWeight: 600, textDecoration: 'underline' };
    }
    display[i] = (<li className='page-item' key={i}><a className='page-link' style={styleA} href="/#" onClick={pageFunc.bind(this, null, perpage, max, i)}>{i}</a></li>);
  }
  if (displayElipses) {
    let indexFinal = displayLimit;
    if (pagination === 1) {
      indexFinal = indexFinal + 1;
    }
    display[indexFinal] = (<li className='page-item' ><button className='page-link' style={styleA}>...</button></li>);
  }
  return display;
}
export const paginateLimit = (max, pageFunc, pagination) => {
  return (
    <div>
      <input 
        type="number" 
        value={pagination}  
        onChange={pageFunc.bind(this, max)}/>/{max}
    </div>
  );
}
export const __noProduct = 'no-product';
export const paginationProcess = ({ 
  lengthData, pagination, 
  current, perpage, max,
  number, type
}) => {
  var checkpagination;
  let result;
  let nextCurrent;
  
  switch(type) {
    case 'prev':
      checkpagination = (pagination === 1?1:pagination-1)
      nextCurrent = current-perpage;
      if (current === 0) {
        nextCurrent = current;
      }
      result = {
        ...result,
        current: nextCurrent,
        pagination: checkpagination
      }
      break;
    case 'next':
      checkpagination = (pagination === max?max:pagination+1)
      nextCurrent = current+perpage;
      if (current === lengthData - lengthData%perpage) {
        nextCurrent = current;
      }
      result = {
        ...result,
        current: nextCurrent,
        pagination: checkpagination
      }
      break;
    case 'first':
      result = {
        ...result,
        pagination: 1,
        current: 0
      }
      break;
    case 'last':
      result = {
        ...result,
        current: (perpage*max)-perpage,
        pagination: max
      }
      break;
    default:
      nextCurrent = (number*perpage) - perpage;
      if (number === 1) {
        nextCurrent = 0;
      }
      if (number === lengthData) {
        nextCurrent = lengthData - lengthData%perpage;
      }
      result = {
        ...result,
        current: nextCurrent,
        pagination: number
      }
      break;
  }
  return result;
}
export const checkCompanyAB = (obj) => {
  if (obj != null) {
    return obj.toUpperCase(); 
  }
  return "";
}
export const sortTable = (nameA, nameB, sort) => {
  if (nameA < nameB) {
    if (sort) return 1;
    return -1;
  }
  if (nameA > nameB) {
    if (sort) return -1;
    return 1;
  }
  return 0;
}
export const getURLParams = (param) => {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  return urlParams.get(param);
}
export const formatCurrency = (money) => (new Intl.NumberFormat('en-US',
{ style: 'currency', currency: 'USD' }
).format(money));
export const DispositionObj = [
  "None",
  "SP (Self Pay)",
  "NFU (Needs Followup)",
  "NS (Needs Scholarship)",
  "RL (Revisit Later)",
  "TY (Too Young)",
  "TO (Too Old)",
  "M (Medicaid)",
  "PI (Private Insurance)",
  "L (Location)",
  "NC (No Call)"
];
let tempObj = [];
tempObj[4] = "Phone Call";
tempObj[5] = "Missed Call";
tempObj[6] = "Form Fill";
export const SourceObj = [...tempObj];
export const defaultSelected = {
  "Active": "Success",
  "Referred": "Success",
  "Deactivated": "Success",
  "Admin": "Success",
  "All": "Success"
}
export const searchByOptions = [
  { value: 'EmailAddress', label: 'Email' },
  { value: 'FirstName', label: 'First Name' },
  { value: 'LastName', label: 'Last Name' },
  { value: 'CompanyName', label: 'Company Name' },
  { value: 'HomePhone', label: 'Home Phone' },
  { value: 'WorkPhone', label: 'WorkPhone' },
  { value: 'CellPhone', label: 'CellPhone' },
];
export const searchByCompanyId = [
  { value: '0', label: 'All' },
  { value: '12', label: 'Advanced Recovery Systems' },
  { value: '1', label: 'Apex Notes' },
  { value: '20', label: 'At The Crossroads' },
  { value: '3', label: 'Cedar Ridge' },
  { value: '22', label: 'Clearview Girls Academy' },
  { value: '2', label: 'Clearview Horizon' },
  { value: '7', label: 'Elevations' },
  { value: '21', label: 'Elk Mountain' },
  { value: '10', label: 'Family First' },
  { value: '6', label: 'Family Positive Impact' },
  { value: '16', label: 'Gulf Coast Treatment Center' },
  { value: '13', label: 'Journey Pure' },
  { value: '9', label: 'Makana' },
  { value: '4', label: 'MiBoSpi Recovery' },
  { value: '17', label: 'Newport Academy' },
  { value: '14', label: 'Palm Shores Behavioral Health Center'},
  { value: '8', label: 'Red Frog'},
  { value: '19', label: 'Second Chances of Southern Utah'},
  { value: '23', label: 'Soulegria'},
  { value: '5', label: 'Therapy Insider'},
  { value: '18', label: 'Visions Teen Center'},
  { value: '11', label: 'Voyage Recovery'},
  { value: '15', label: 'Voyage Recovery Center'},
];

export const searchByOptionsClients = [
  { value:'EmailAddress', label: 'Email' },
  { value:'FirstName', label: 'First Name' },
  { value:'LastName', label: 'Last Name' },
  { value:'HomePhone', label: 'Home Phone' },
  { value:'WorkPhone', label: 'WorkPhone' },
  { value:'CellPhone', label: 'CellPhone' },
  { value:'First4', label: 'First 4' },
  { value:'Last4', label: 'Last 4'}
];

export const perPageLimitList = [
  { value:10, label: '10'},
  { value:20, label: '20'},
  { value:30, label: '30'},
  { value:40, label: '40'}
];

export const leadStatus = [
  { value:'Active', label: 'Active'},
  { value:'Referred', label: 'Referred'},
  { value:'Deactivated', label: 'Deactivated'},
  { value:'Business Admin', label: 'Business Admin'}
];

export const leadDisposition = [
  { value:'0', label: 'None'},
  { value:'1', label: 'SP (Self Pay)'},
  { value:'3', label: 'NS (Needs Scholarship)'},
  { value:'7', label: 'M (Medicaid)'},
  { value:'8', label: 'PI (Private Insurance)'},
  { value:'10', label: 'NC (No Call)'}
];

export const leadCrisisScale = [
  { value:'Immediate', label: 'Immediate'},
  { value:'Urgent', label: 'Urgent'},
  { value:'Has Time', label: 'Has Time'}
];

export const leadYesNo = [
  { value: '0', label: 'No' },
  { value: '1', label: 'Yes' }
];

export const leadUsers = [
  { value: '0', label: 'None' },
  { value: '189', label: 'Debbie CelaniNo' },
  { value: '317', label: 'Jason Thielbahr' },
  { value: '321', label: 'Jason Thielbahr' },
  { value: '26', label: 'Kevin  Johnson' },
  { value: '322', label: 'Mary Louise Thielbahr' },
  { value: '323', label: 'Mike Linderman MA LCPC' },
  { value: '276', label: 'Paula Riggs' },
  { value: '272', label: 'Tara Heaton' }
]