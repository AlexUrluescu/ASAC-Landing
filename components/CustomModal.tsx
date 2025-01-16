"use client";
import { ChangeEvent, useState } from "react";
import { Modal, Button, Input, Flex, message } from "antd";

const { TextArea } = Input;

interface ICustomModal {
  buttonText: string;
  showInfo: boolean;
}

const CustomModal: React.FC<ICustomModal> = ({ buttonText, showInfo }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [email, setEmail] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [messageApi, contextHolder] = message.useMessage();
  const [correctEmail, setCorrectEmail] = useState<boolean>(true);

  const success = () => {
    messageApi.open({
      type: "success",
      content: "Your message has been sent successfully",
    });
  };

  const error = () => {
    messageApi.open({
      type: "error",
      content: "Your message has not been sent successfully",
    });
  };

  const resetForm = () => {
    setEmail("");
    setContent("");
  };

  const showModal = () => setIsModalOpen(true);
  const handleOk = async () => {
    setIsModalOpen(false);

    try {
      const payload = {
        email: email,
        info: content,
      };

      const res = await fetch("http://localhost:8000/emailInfoRoutes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        error();
      }

      const data = await res.json();
      console.log("data", data);

      success();
      resetForm();
    } catch (error) {
      console.log(error);
    }
  };
  const handleCancel = () => {
    setIsModalOpen(false);
    resetForm();
  };

  const handleInputEmaailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    // Regular expression for basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setEmail(value);

    if (emailRegex.test(value)) {
      // Update the email state if valid
      setCorrectEmail(true);
    } else {
      console.log("Invalid email format");
      setCorrectEmail(false);
      // Optionally, you could set an error state or display a message to the user
    }
  };

  const handleInputContentChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = e.target;

    setContent(value);
  };

  return (
    <>
      {contextHolder}
      <Button
        style={{ backgroundColor: "white", color: "black", fontWeight: 600 }}
        type="primary"
        onClick={showModal}
      >
        {buttonText}
      </Button>
      <Modal
        width={700}
        title={
          <span style={{ fontWeight: 600, fontSize: 20 }}>{buttonText}</span>
        }
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        okText="Send"
        okButtonProps={{ disabled: email === "" || content === "" }}
      >
        <Flex style={{ padding: "20px 0px" }} vertical gap={20}>
          <Input
            style={{
              border:
                email === ""
                  ? "auto"
                  : correctEmail
                  ? "2px solid green"
                  : "2px solid red",
            }}
            onChange={(e) => handleInputEmaailChange(e)}
            placeholder="Your email"
            value={email}
          />
          {showInfo ? (
            <TextArea
              onChange={(e) => handleInputContentChange(e)}
              style={{ height: 100 }}
              placeholder="Tell us"
              value={content}
            />
          ) : null}
        </Flex>
      </Modal>
    </>
  );
};

export default CustomModal;
