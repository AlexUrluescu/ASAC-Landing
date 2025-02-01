"use client";
import { ChangeEvent, useState } from "react";
import { Modal, Button, Input, Flex, message } from "antd";
import { useTranslations } from "next-intl";
import "../app/globals.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const { TextArea } = Input;

interface ICustomModal {
  buttonText: string;
  showInfo: boolean;
}

enum UserTypes {
  CLIENT = "Client",
  COMPANY = "Company",
}

const CustomModal: React.FC<ICustomModal> = ({ buttonText, showInfo }) => {
  const t = useTranslations("home");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [email, setEmail] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [messageApi, contextHolder] = message.useMessage();
  const [correctEmail, setCorrectEmail] = useState<boolean>(true);
  const [step, setStep] = useState<number>(1);
  const [userType, setUserType] = useState<UserTypes | null>(null);

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
        date: new Date(),
        user: userType,
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
    setStep(1);
    setUserType(null);
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
        open={isModalOpen}
        footer={false}
        onCancel={handleCancel}
      >
        <Flex style={{ padding: "20px 0px" }} vertical gap={20}>
          {step === 1 ? (
            <Flex vertical gap={30}>
              <Flex justify="center">
                <span style={{ fontSize: 27, fontWeight: 600 }}>
                  {t("modal.title1")}
                </span>
              </Flex>
              <Flex justify="center" gap={20} style={{ height: 200 }}>
                <Flex
                  onClick={() => {
                    setUserType(UserTypes.CLIENT);
                    setStep(2);
                  }}
                  className="c-container-type-user"
                  justify="center"
                  align="center"
                >
                  <span style={{ fontSize: 25, fontWeight: 400 }}>
                    {" "}
                    {t("modal.client")}
                  </span>
                </Flex>
                <Flex
                  onClick={() => {
                    setUserType(UserTypes.COMPANY);
                    setStep(2);
                  }}
                  className="c-container-type-user"
                  justify="center"
                  align="center"
                >
                  <span style={{ fontSize: 25, fontWeight: 400 }}>
                    {" "}
                    {t("modal.company")}
                  </span>
                </Flex>
              </Flex>
            </Flex>
          ) : (
            <Flex vertical gap={20}>
              <Flex
                style={{ position: "relative" }}
                justify="center"
                align="center"
                onClick={() => {
                  setUserType(null);
                  setStep(1);
                }}
              >
                <Flex
                  align="center"
                  gap={10}
                  style={{ position: "absolute", left: 0, top: "25%" }}
                  className="c-container-back"
                >
                  <FontAwesomeIcon icon={faArrowLeft} />
                  <span> {t("modal.back")}</span>
                </Flex>
                <span style={{ fontSize: 27, fontWeight: 600 }}>
                  {t("modal.title2")}
                </span>
              </Flex>
              <Flex vertical gap={50}>
                <Flex vertical gap={20}>
                  <Flex vertical gap={5}>
                    <span style={{ fontSize: 16, fontWeight: 500 }}>
                      {" "}
                      {t("modal.email")}
                    </span>
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
                      placeholder={"john@gmail.com"}
                    />
                  </Flex>

                  {showInfo ? (
                    <Flex vertical gap={5}>
                      <span style={{ fontSize: 16, fontWeight: 500 }}>
                        {t("modal.message")}
                      </span>
                      <TextArea
                        onChange={(e) => handleInputContentChange(e)}
                        style={{ height: 100 }}
                        placeholder={t("placeholders.tellUs")}
                        value={content}
                      />
                    </Flex>
                  ) : null}
                </Flex>

                <Flex justify="center">
                  <Button
                    onClick={() => handleOk()}
                    style={{ width: 100, fontSize: 16, fontWeight: 500 }}
                    type="primary"
                  >
                    {t("modal.send")}
                  </Button>
                </Flex>
              </Flex>
            </Flex>
          )}
        </Flex>
      </Modal>
    </>
  );
};

export default CustomModal;
