import React, { useState } from "react";
import { Tab, Nav } from "react-bootstrap";
import Conversations from "./Conversations";
import Contacts from "./Contacts";

const CONVERSATIONS_KEY = "conversations";
const CONTACTS_KEY = "  contacts";

const Sidebar = ({ id }) => {
  const [activeKey, setActiveKey] = useState(CONVERSATIONS_KEY);

  return (
    <div className="d-flex flex-column" style={{ maxWidth: "300px" }}>
      <Tab.Container activeKey={activeKey} onSelect={setActiveKey}>
        <Nav variant="tabs" className="justify-content-center">
          <Nav.Item>
            <Nav.Link eventKey={CONVERSATIONS_KEY}>Conversations</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey={CONTACTS_KEY}>Contacts</Nav.Link>
          </Nav.Item>
        </Nav>
        <Tab.Content className="border-right overflow-auto flex-grow-1">
          <Tab.Pane eventKey={CONVERSATIONS_KEY}>
            <Conversations />
          </Tab.Pane>
          <Tab.Pane eventKey={CONTACTS_KEY}>
            <Contacts />
          </Tab.Pane>
        </Tab.Content>
        <div>
          Id: <span className="text-muted">{id}</span>
        </div>
      </Tab.Container>
    </div>
  );
};

export default Sidebar;