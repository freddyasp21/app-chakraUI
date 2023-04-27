import { MinusIcon } from "@chakra-ui/icons";
import { Box, Flex, List, ListIcon, ListItem } from "@chakra-ui/react";
import { Link, NavLink } from "react-router-dom";
import { RiShieldFlashLine, RiDatabase2Line, RiUser3Line } from "react-icons/ri";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";

function Sidebar() {
  return (
    <List color="white" fontSize="1em" spacing={4}>
      <Flex alignItems="center" justifyContent="center" gap={2} mb={6} fontWeight="bold" fontSize="1.2em">
        <RiShieldFlashLine />
        <Link to="/">
          <h2>Secure Finance</h2>
        </Link>
      </Flex>

      <Accordion allowToggle border={"transparent"} fontSize="1em">
        <AccordionItem>
          <h2>
            <AccordionButton boxSizing="box-contet">
              <Box as="span" flex="1" textAlign="left" display="flex" alignItems="center" gap={2}>
                <RiDatabase2Line/>
                Dashboards
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <ListItem display="flex" alignItems="center" mb={2}>
              <ListIcon as={MinusIcon} mb="0px"/>
              <NavLink to="analytics" mb="0px">Analytics</NavLink>
            </ListItem>
            <ListItem display="flex" alignItems="center" mb={2}>
              <ListIcon as={MinusIcon} mb="0px"/>
              <NavLink to="crm" mb="0px">CRM</NavLink>
            </ListItem>
            <ListItem display="flex" alignItems="center" mb={2}>
              <ListIcon as={MinusIcon} mb="0px"/>
              <NavLink to="banks" mb="0px">Banks</NavLink>
            </ListItem>
            <ListItem display="flex" alignItems="center" mb={2}>
              <ListIcon as={MinusIcon} mb="0px"/>
              <NavLink to="Sales" mb="0px">Sales</NavLink>
            </ListItem>
            <ListItem display="flex" alignItems="center" mb={2}>
              <ListIcon as={MinusIcon} mb="0px"/>
              <NavLink to="shopping" mb="0px">Shopping</NavLink>
            </ListItem>
            <ListItem display="flex" alignItems="center" mb={2}>
              <ListIcon as={MinusIcon} mb="0px"/>
              <NavLink to="Payments" mb="0px">Payments</NavLink>
            </ListItem>
            <ListItem display="flex" alignItems="center" mb={2}>
              <ListIcon as={MinusIcon} mb="0px"/>
              <NavLink to="calendar" mb="0px">Calendar</NavLink>
            </ListItem>
            <ListItem display="flex" alignItems="center" mb={2}>
              <ListIcon as={MinusIcon} mb="0px"/>
              <NavLink to="debts" mb="0px">Debts</NavLink>
            </ListItem>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton boxSizing="box-contet">
              <Box as="span" flex="1" textAlign="left" display="flex" alignItems="center" gap={2}>
                <RiUser3Line/>
                Employees
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <ListItem display="flex" alignItems="center" mb={2}>
              <ListIcon as={MinusIcon} mb="0px"/>
              <NavLink to="/empleoyees/payments" mb="0px">Payments</NavLink>
            </ListItem>
            <ListItem display="flex" alignItems="center" mb={2}>
              <ListIcon as={MinusIcon} mb="0px"/>
              <NavLink to="/empleoyees/vacations" mb="0px">Vacations</NavLink>
            </ListItem>
            <ListItem display="flex" alignItems="center" mb={2}>
              <ListIcon as={MinusIcon} mb="0px"/>
              <NavLink to="/contats" mb="0px">Contacts</NavLink>
            </ListItem>
            <ListItem display="flex" alignItems="center" mb={2}>
              <ListIcon as={MinusIcon} mb="0px"/>
              <NavLink to="Sales" mb="0px">Sales</NavLink>
            </ListItem>
            <ListItem display="flex" alignItems="center" mb={2}>
              <ListIcon as={MinusIcon} mb="0px"/>
              <NavLink to="shopping" mb="0px">Shopping</NavLink>
            </ListItem>
            <ListItem display="flex" alignItems="center" mb={2}>
              <ListIcon as={MinusIcon} mb="0px"/>
              <NavLink to="Payments" mb="0px">Payments</NavLink>
            </ListItem>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </List>
  );
}

export default Sidebar;
