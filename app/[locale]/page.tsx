import { Flex } from "antd";
import Image from "next/image";
import "antd/dist/reset.css";
import ServiceCarousel from "@/components/ServiceCarousel";
import CustomModal from "@/components/CustomModal";
import { useLocale, useTranslations } from "next-intl";
import LocalSwitcher from "@/components/LocalSwitcher";
import { LinkedinOutlined } from "@ant-design/icons";
import Link from "next/link";

export default function Home() {
  const t = useTranslations("home");
  const locale = useLocale();

  return (
    <div>
      <Flex vertical className="main-container">
        <Flex justify="center">
          <Flex
            className="wrapper-nav"
            style={{
              // width: "75%",
              padding: "15px 0",
            }}
            align="center"
            justify="space-between"
          >
            <span
              style={{
                padding: 0,
                fontSize: 25,
                fontWeight: 700,
                color: "white",
              }}
            >
              ASAC
            </span>
            <Flex align="center" gap={10}>
              <LocalSwitcher />
              <CustomModal
                buttonText={t("buttons.contact")}
                showInfo={true}
                buttonTriggerStyle={{ fontSize: 17, width: 140, height: 37 }}
              />
            </Flex>
          </Flex>
        </Flex>
        <Flex style={{ padding: "30px 0", height: "100%" }} gap={30} vertical>
          <Flex vertical align="center">
            <Flex className="title-container" vertical align="center" gap={20}>
              <Flex className="title" justify="center">
                {t("title")}
              </Flex>
              <Flex
                style={{
                  textAlign: "center",
                  fontSize: 17,
                  fontWeight: 500,
                  lineHeight: 1.6,
                }}
              >
                {t("description")}
              </Flex>
            </Flex>
          </Flex>
          <Flex style={{ height: "100%" }} justify="center" align="center">
            <div
              className="demo"
              style={{
                position: "relative",
                borderRadius: 10,
                overflow: "hidden",
                height: "100%",
              }}
            >
              <video
                src="/ASAC-Trailer.mp4"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  position: "absolute",
                  top: 0,
                  left: 0,
                }}
                autoPlay
                loop
                muted
                playsInline
              ></video>
            </div>
          </Flex>
          <Flex
            align="center"
            style={{ position: "relative" }}
            vertical
            gap={25}
          >
            <Image
              className="arrow"
              style={{ position: "absolute", top: -20, left: "41%" }}
              src={"/image.png"}
              width={30}
              height={65}
              alt=""
            />
            <span
              style={{
                fontSize: 23,
                color: "white",
                fontWeight: 600,
              }}
            >
              {t("coming")} ...
            </span>

            <CustomModal
              buttonText={t("buttons.register")}
              showInfo={false}
              buttonTriggerStyle={{ fontSize: 19, width: 180, height: 45 }}
            />
          </Flex>
        </Flex>
      </Flex>
      <Flex>
        <Flex
          style={{
            width: "100%",
            color: "white",
          }}
          align="center"
          vertical
          gap={70}
        >
          <Flex className="content-container" vertical gap={50} align="center">
            <div className="subTitle">
              <span> {t("subTitle")}</span>
              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: "28%",
                  backgroundColor: " rgb(72, 153, 247)",
                  content: "",
                  height: 5,
                  width: 100,
                }}
              ></div>
            </div>

            <ServiceCarousel />

            <Flex className="qa-container">
              <Flex
                vertical
                gap={20}
                style={{
                  backgroundColor: "white",
                  marginLeft: 5,
                  padding: 20,
                  width: "100%",
                }}
              >
                <span
                  style={{
                    fontSize: 25,
                    fontWeight: 700,
                    color: "rgb(72, 153, 247)",
                  }}
                >
                  {t("qas.qa1.title")}
                </span>
                <span
                  style={{ color: "black", lineHeight: 1.6 }}
                  dangerouslySetInnerHTML={{ __html: t("qas.qa1.description") }}
                />
              </Flex>
            </Flex>
            <Flex className="qa-container">
              <Flex
                vertical
                gap={20}
                style={{
                  backgroundColor: "white",
                  marginLeft: 5,
                  padding: 20,
                  width: "100%",
                }}
              >
                <span
                  style={{
                    fontSize: 25,
                    fontWeight: 700,
                    color: "rgb(72, 153, 247)",
                  }}
                >
                  {t("qas.qa2.title")}
                </span>
                <span
                  style={{ color: "black", lineHeight: 1.6 }}
                  dangerouslySetInnerHTML={{ __html: t("qas.qa2.description") }}
                />
              </Flex>
            </Flex>

            <Flex className="qa-container">
              <Flex
                vertical
                gap={20}
                style={{
                  backgroundColor: "white",
                  marginLeft: 5,
                  padding: 20,
                  width: "100%",
                }}
              >
                <span
                  style={{
                    fontSize: 25,
                    fontWeight: 700,
                    color: "rgb(72, 153, 247)",
                  }}
                >
                  {t("qas.qa3.title")}
                </span>
                <span
                  style={{ color: "black", lineHeight: 1.6 }}
                  dangerouslySetInnerHTML={{ __html: t("qas.qa3.description") }}
                />
              </Flex>
            </Flex>
          </Flex>
          {/* <Flex justify="center" style={{ width: "100%" }}>
            <Flex className="content-container-client" gap={30}>
              <Flex justify="center" className="container-img-client">
                <img
                  style={{ marginTop: 20, height: "100%", width: "100%" }}
                  className="client-image"
                  src={`/client-desc-${locale}.png`}
                  alt=""
                />
              </Flex>
              <Flex className="container-desc-client" vertical justify="center">
                <Flex vertical gap={10}>
                  <span className="client-text1">{t("client.text1")}</span>
                  <span className="client-text2">{t("client.text2")}</span>
                </Flex>
                <span
                  className="client-text3"
                  dangerouslySetInnerHTML={{ __html: t("client.text3") }}
                />
              </Flex>
            </Flex>
          </Flex> */}
        </Flex>
      </Flex>
      <div className="footer">
        <Flex
          justify="center"
          gap={50}
          style={{ padding: 10, marginBottom: 20 }}
        >
          <Flex align="center" gap={5}>
            <LinkedinOutlined style={{ fontSize: 23, color: "blue" }} />
            <Link
              href="https://www.linkedin.com/company/asac-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              ASAC LinkedIn
            </Link>
          </Flex>

          <span>
            <Link href={`/${locale}/terms-and-conditions`}>{t("terms")}</Link>
          </span>
        </Flex>
        © 2025 ASAC. {t("allRights")}
      </div>
    </div>
  );
}
