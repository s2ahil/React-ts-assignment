import React, { useState } from "react";
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Collapse,
} from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Department from "../models/Department";


const DepartmentListComponent: React.FC = () => {
  const [checked, setChecked] = useState<string[]>([]);
  const [openDepartments, setOpenDepartments] = useState<boolean[]>([]);

  // Hardcoded JSON data
  const departmentsData: Department[] = [
    {
      id: 1,
      name: "Department 1",
      subDepartments: ["Sub-Department 1.1", "Sub-Department 1.2"],
    },
    {
      id: 2,
      name: "Department 2",
      subDepartments: ["Sub-Department 2.1", "Sub-Department 2.2"],
    },
  ];

  const handleToggle = (index: number) => {
    const newOpenDepartments = [...openDepartments];
    newOpenDepartments[index] = !newOpenDepartments[index];
    setOpenDepartments(newOpenDepartments);
  };

  const handleCheckboxChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    val: Department,
    index: number,
    subIndex?: number
  ) => {
    const newChecked = [...checked];

    if (val.subDepartments && subIndex === undefined) {
      // If it's a department, toggle all sub-departments
      val.subDepartments.forEach((subDep, sIndex) => {
        const subDepKey = `sub-${index}-${sIndex}`;
        const subDepIndex = newChecked.indexOf(subDepKey);
        if (subDepIndex === -1) {
          // Sub-department not found, add it to the checked list
          newChecked.push(subDepKey);
        } else {
          // Sub-department found, remove it from the checked list
          newChecked.splice(subDepIndex, 1);
        }
      });

      // Toggle the current department
      const depKey = `dep-${index}`;
      const depIndex = newChecked.indexOf(depKey);
      if (depIndex === -1) {
        // Department not found, add it to the checked list
        newChecked.push(depKey);
      } else {
        // Department found, remove it from the checked list
        newChecked.splice(depIndex, 1);
      }
    } else if (subIndex !== undefined) {
      // If it's a sub-department, toggle it
      const subDepKey = `sub-${index}-${subIndex}`;
      const subDepIndex = newChecked.indexOf(subDepKey);
      if (subDepIndex === -1) {
        // Sub-department not found, add it to the checked list
        newChecked.push(subDepKey);
      } else {
        // Sub-department found, remove it from the checked list
        newChecked.splice(subDepIndex, 1);
      }

      // Check if all sub-departments are selected, then select the parent department
      const allSubDepsSelected = val.subDepartments.every((subDep, sIndex) =>
        newChecked.includes(`sub-${index}-${sIndex}`)
      );

      if (allSubDepsSelected) {
        const depKey = `dep-${index}`;
        const depIndex = newChecked.indexOf(depKey);
        if (depIndex === -1) {
          // Department not found, add it to the checked list
          newChecked.push(depKey);
        }
      } else {
        const depKey = `dep-${index}`;
        const depIndex = newChecked.indexOf(depKey);
        if (depIndex !== -1) {
          // Department found, remove it from the checked list
          newChecked.splice(depIndex, 1);
        }
      }
    }

    setChecked(newChecked);
  };

  const isDepartmentSelected = (val: Department, index: number) => {
    const depKey = `dep-${index}`;
    return checked.includes(depKey);
  };

  const isSubDepartmentSelected = (
    val: Department,
    index: number,
    subIndex: number
  ) => {
    const subDepKey = `sub-${index}-${subIndex}`;
    return checked.includes(subDepKey);
  };

  return (
    <>
      {departmentsData.map((val, index) => (
        <div key={val.id} style={{ display: "flex", margin: "10px" }}>
          <List>
            <ListItem>
              <Checkbox
                checked={isDepartmentSelected(val, index)}
                onChange={(e) => handleCheckboxChange(e, val, index)}
              />
              <div>{val.name}</div>
              <ListItemIcon
                onClick={() => handleToggle(index)}
                style={{ cursor: "pointer" }}
              >
                {openDepartments[index] ? (
                  <ExpandLessIcon />
                ) : (
                  <ExpandMoreIcon />
                )}
              </ListItemIcon>
            </ListItem>

            <Collapse in={openDepartments[index]} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                {val.subDepartments?.map((subDep, subIndex) => (
                  <ListItem key={subIndex} style={{ marginLeft: "2rem" }}>
                    <Checkbox
                      checked={isSubDepartmentSelected(val, index, subIndex)}
                      onChange={(e) =>
                        handleCheckboxChange(e, val, index, subIndex)
                      }
                    />
                    <div>{subDep}</div>
                  </ListItem>
                ))}
              </List>
            </Collapse>
          </List>
        </div>
      ))}
    </>
  );
};

export default DepartmentListComponent;
