import React, { useState } from "react";
import { Upload, message, Button } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import axios from "axios";

const UploadLargeData = () => {
  const [file, setFile] = useState(null);

  const handleChange = (info) => {
    if (info.file.status === "removed") {
      setFile(null);
    } else {
      setFile(info.file.originFileObj);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!file) {
      message.error("Please select a file to upload");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await axios.post(
        "http://localhost:3001/api/largecampaigns/upload",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      message.success("Upload successful: " + response.data.message);
    } catch (error) {
      message.error(
        "Error uploading file: " + error.response?.data?.message ||
          error.message
      );
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Upload.Dragger
        name="file"
        accept=".csv"
        beforeUpload={() => false}
        onChange={handleChange}
        multiple={false}
        maxCount={1}
      >
        <p className="ant-upload-drag-icon">
          <UploadOutlined />
        </p>
        <p className="ant-upload-text">
          Click or drag file to this area to upload
        </p>
        <p className="ant-upload-hint">Supports single CSV file upload.</p>
      </Upload.Dragger>
      <Button
        type="primary"
        onClick={handleSubmit}
        disabled={!file}
        style={{ marginTop: "16px" }}
      >
        Upload CSV
      </Button>
    </form>
  );
};

export default UploadLargeData;
