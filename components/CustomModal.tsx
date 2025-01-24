"use client";
import { ChangeEvent, useState } from "react";
import { Modal, Button, Input, Flex, message } from "antd";
import { useTranslations } from "next-intl";
import "../app/globals.css";

const { TextArea } = Input;

interface ICustomModal {
  buttonText: string;
  showInfo: boolean;
}

const CustomModal: React.FC<ICustomModal> = ({ buttonText, showInfo }) => {
  const t = useTranslations("home");
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

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = async () => {
    setIsModalOpen(false);

    try {
      const payload = {
        email: email,
        info: content,
      };

      const res = await fetch("https://asac-be.onrender.com/emailInfoRoutes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        error();
      }

      setEmail("");
      success();
      resetForm();
    } catch (error) {
      console.error(error);
    }
  };
  const handleCancel = () => {
    setIsModalOpen(false);
    resetForm();
  };

  const handleInputEmaailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setEmail(value);

    if (emailRegex.test(value)) {
      setCorrectEmail(true);
    } else {
      setCorrectEmail(false);
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
        style={{}}
        className="triger-button"
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
        okText={t("buttons.send")}
        cancelText={t("buttons.cancel")}
        okButtonProps={{ disabled: email === "" || !correctEmail }}
      >
        <Flex style={{ padding: "20px 0px" }} vertical gap={20}>
          <Input
            className="inputs"
            value={email}
            style={{
              border:
                email === ""
                  ? "1px solid #d9d9d9"
                  : correctEmail
                  ? "1px solid green"
                  : "1px solid red",
              outline: "none",
            }}
            onFocus={(e) => {
              if (email !== "") {
                e.target.style.border = correctEmail
                  ? "1px solid green"
                  : "1px solid red";
              } else {
                e.target.style.border = "1px solid #096dd9";
              }
            }}
            onBlur={(e) => {
              if (email !== "") {
                e.target.style.border = correctEmail
                  ? "1px solid green"
                  : "1px solid red";
              } else {
                e.target.style.border = "1px solid #d9d9d9";
              }
            }}
            onChange={(e) => handleInputEmaailChange(e)}
            placeholder={t("placeholders.yourEmail")}
          />

          {showInfo ? (
            <TextArea
              onChange={(e) => handleInputContentChange(e)}
              style={{ height: 100 }}
              placeholder={t("placeholders.tellUs")}
              value={content}
            />
          ) : null}
        </Flex>
      </Modal>
    </>
  );
};

export default CustomModal;
