import React, { useState, useEffect } from "react";
import axios from "axios";
import { Table, Tag, Button, Space, Rate } from "antd";
import { SettingOutlined, ExportOutlined } from "@ant-design/icons";
import "../styles/MyTableBorder.css";
import moment from "moment"; // For date formatting

const EmailStyle = {
  color: "#007c89",
  fontWeight: "500",
  maxWidth: "300px",
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis",
};

const Tags = ({ tag }) => (
  <Button
    style={{
      backgroundColor: "#EFEEEA",
      width: "fit-content",
      height: "30px",
      border: "0.5px solid #f3f3f3",
    }}
    color={tag === "Customer" ? "blue" : "green"}
  >
    {tag}
  </Button>
);

const EmailMarketingTag = ({ status }) => (
  <Button
    style={{
      border: "none",
      backgroundColor: status === "Subscribed" ? "#d8efc9" : "#f6e7ca",
      fontSize: "12px",
    }}
    color={status === "Subscribed" ? "#d8efc9" : "#f6e7ca"}
  >
    {status}
  </Button>
);

const TableComponent = () => {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);

  // Fetch data from API
  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3001/api/contacts/getAllContacts"
        );
        const fetchedContacts = response.data.data.map((contact) => ({
          key: contact._id,
          email: contact.emailaddress,
          firstName: contact.firstname,
          address: contact.address,
          phoneNumber: contact.phonenumber,
          birthday: contact.birthday,
          tags: contact.tags,
          emailMarketing: contact.emailmarkting,
          source: contact.source,
          rating: parseInt(contact.contactrating, 10), // Convert rating to a number
          contactDateAdded: moment(contact.createdAt).format(
            "MM/DD/YYYY h:mm A"
          ), // Format createdAt
          lastChanged: moment(contact.updatedAt).format("MM/DD/YYYY h:mm A"), // Format updatedAt
        }));
        setContacts(fetchedContacts);
      } catch (error) {
        console.error("Error fetching contacts:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchContacts();
  }, []);

  const columns = [
    {
      title: "Email Address",
      dataIndex: "email",
      key: "email",
      fixed: "left",
      width: 260,
      render: (text) => <span style={EmailStyle}>{text}</span>,
    },
    {
      title: "First Name",
      dataIndex: "firstName",
      key: "firstName",
      width: 160,
      render: (text) => <span style={{ fontSize: "13px" }}>{text}</span>,
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
      width: 160,
      render: (text) => <span style={{ fontSize: "13px" }}>{text}</span>,
    },
    {
      title: "Phone Number",
      dataIndex: "phoneNumber",
      key: "phoneNumber",
      width: 180,
      render: (text) => <span style={{ fontSize: "13px" }}>{text}</span>,
    },
    {
      title: "Birthday",
      dataIndex: "birthday",
      key: "birthday",
      width: 160,
    },
    {
      title: "Tags",
      dataIndex: "tags",
      key: "tags",
      width: 170,
      render: (tag) => <Tags tag={tag} />,
    },
    {
      title: "Email Marketing",
      dataIndex: "emailMarketing",
      key: "emailMarketing",
      width: 140,
      render: (status) => <EmailMarketingTag status={status} />,
    },
    {
      title: "Source",
      dataIndex: "source",
      key: "source",
      width: 300,
    },
    {
      title: "Rating",
      dataIndex: "rating",
      key: "rating",
      width: 230,
      render: (rating) => <Rate disabled defaultValue={rating} />, // Render stars for rating
    },
    {
      title: "Contact Date Added",
      dataIndex: "contactDateAdded",
      key: "contactDateAdded",
      width: 170,
    },
    {
      title: "Last Changed",
      dataIndex: "lastChanged",
      key: "lastChanged",
      width: 160,
    },
  ];

  const rowSelection = {
    selectedRowKeys,
    onChange: (newSelectedRowKeys) => {
      setSelectedRowKeys(newSelectedRowKeys);
    },
  };

  return (
    <div
      style={{
        border: "0.5px solid #EFEEEA",
        borderRadius: "10px",
        margin: "0px 50px",
      }}
    >
      <div
        style={{ padding: "10px 10px", display: "flex", justifyContent: "end" }}
      >
        <Space style={{ marginBottom: 5 }}>
          <Button
            style={{
              border: "none",
              fontWeight: "bold",
              display: "flex",
              alignItems: "center",
            }}
            icon={<SettingOutlined />}
          >
            Columns
          </Button>
          <Button
            style={{
              border: "none",
              fontWeight: "bold",
              display: "flex",
              alignItems: "center",
            }}
            icon={<ExportOutlined />}
          >
            Export Audience
          </Button>
        </Space>
      </div>
      <Table
        rowSelection={rowSelection}
        columns={columns}
        dataSource={contacts} // Use fetched data from API
        scroll={{ x: 2000, y: 400 }}
        pagination={false}
        loading={loading} // Show loading state while fetching data
        style={{
          overflow: "hidden",
          tableLayout: "fixed",
          border: "0.5px solid gainsboro",
        }}
        sticky
        className="custom-table"
      />
    </div>
  );
};

export default TableComponent;
