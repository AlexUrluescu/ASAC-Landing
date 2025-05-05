import { Flex } from "antd";
import Image from "next/image";
import "antd/dist/reset.css";
import ServiceCarousel from "@/components/ServiceCarousel";
import CustomModal from "@/components/CustomModal";
import { useLocale, useTranslations } from "next-intl";
import LocalSwitcher from "@/components/LocalSwitcher";
import { ArrowLeftOutlined, LinkedinOutlined } from "@ant-design/icons";
import Link from "next/link";

export default function TermsPage() {
  const t = useTranslations();
  const locale = useLocale();

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Flex
        gap={40}
        style={{
          background: "white",
          width: "70%",
          marginBottom: 100,
          marginTop: 50,
        }}
        vertical
      >
        <Flex vertical gap={30}>
          <Flex justify="space-between">
            <Flex gap={10} align="center">
              <ArrowLeftOutlined />
              <Link href={`/${locale}`}>
                <span style={{ fontSize: 18 }}>{t("terms.back")}</span>
              </Link>
            </Flex>
            <LocalSwitcher />
          </Flex>
          <Flex className="terms-header-text" align="center" vertical gap={2}>
            <span style={{ fontWeight: 600 }}>{t("terms.title")}</span>
            <span style={{ fontSize: 18 }}>{t("terms.effectiveDate")}</span>
          </Flex>
        </Flex>

        <Flex vertical gap={8}>
          <span style={{ fontSize: 25, fontWeight: 600 }}>
            {t("terms.section1Title")}
          </span>
          <Flex vertical gap={4}>
            <span>{t("terms.section1Text1")}</span>
            <span>{t("terms.section1Text2")}</span>
            <span>{t("terms.section1Text3")}</span>
          </Flex>
        </Flex>
        <Flex vertical gap={8}>
          <span style={{ fontSize: 25, fontWeight: 600 }}>
            {t("terms.section2Title")}
          </span>
          <Flex vertical gap={5}>
            <span>{t("terms.section2Text1")}</span>
            <span>{t("terms.section2Text2")}</span>
            <Flex vertical gap={5}>
              <span>{t("terms.section2Text3")}</span>
              <ul
                style={{
                  marginLeft: 50,
                  display: "flex",
                  flexDirection: "column",
                  gap: 5,
                }}
              >
                <li>{t("terms.section2List1")}</li>
                <li>{t("terms.section2List2")}</li>
                <li>{t("terms.section2List3")}</li>
              </ul>
            </Flex>
          </Flex>
        </Flex>

        <Flex vertical gap={8}>
          <span style={{ fontSize: 25, fontWeight: 600 }}>
            {t("terms.section3Title")}
          </span>
          <Flex vertical gap={5}>
            <span>{t("terms.section3Text1")}</span>

            <Flex vertical gap={5}>
              <span>{t("terms.section3Text2")}</span>
              <ul
                style={{
                  marginLeft: 50,
                  display: "flex",
                  flexDirection: "column",
                  gap: 5,
                }}
              >
                <li>{t("terms.section3List1")}</li>
                <li>{t("terms.section3List2")}</li>
                <li>{t("terms.section3List3")}</li>
              </ul>
            </Flex>

            <span>{t("terms.section3Text3")}</span>
            <span>{t("terms.section3Text4")}</span>
          </Flex>
        </Flex>

        <Flex vertical gap={8}>
          <span style={{ fontSize: 25, fontWeight: 600 }}>
            {t("terms.section4Title")}
          </span>

          <Flex vertical gap={5}>
            <span>{t("terms.section4Text1")}</span>
            <span>{t("terms.section4Text2")}</span>
            <span>{t("terms.section4Text3")}</span>
          </Flex>

          <Flex vertical gap={8}>
            <Flex vertical gap={5}>
              <span style={{ fontSize: 18, fontWeight: 600, marginTop: 8 }}>
                {t("terms.section4Subtitle1")}
              </span>
              <Flex vertical>
                <span>{t("terms.section4Text4")}</span>
                <ul
                  style={{
                    marginLeft: 50,
                    display: "flex",
                    flexDirection: "column",
                    gap: 5,
                  }}
                >
                  <li>{t("terms.section4List1")}</li>
                  <li>{t("terms.section4List2")}</li>
                  <li>{t("terms.section4List3")}</li>
                </ul>
              </Flex>
            </Flex>

            <Flex vertical gap={5}>
              <span>{t("terms.section4Text5")}</span>
              <ul
                style={{
                  marginLeft: 50,
                  display: "flex",
                  flexDirection: "column",
                  gap: 5,
                }}
              >
                <li>{t("terms.section4List4")}</li>
                <li>{t("terms.section4List5")}</li>
                <li>{t("terms.section4List6")}</li>
                <li>{t("terms.section4List7")}</li>
                <li>{t("terms.section4List8")}</li>
              </ul>
            </Flex>

            <Flex vertical gap={5}>
              <span style={{ fontSize: 18, fontWeight: 600 }}>
                {t("terms.section4Subtitle2")}
              </span>
              <span>{t("terms.section4Text6")}</span>
              <span>{t("terms.section4Text7")}</span>
              <span>{t("terms.section4Text8")}</span>
              <ul
                style={{
                  marginLeft: 50,
                  display: "flex",
                  flexDirection: "column",
                  gap: 5,
                }}
              >
                <li>{t("terms.section4List9")}</li>
                <li>{t("terms.section4List10")}</li>
                <li>{t("terms.section4List11")}</li>
              </ul>
              <span>{t("terms.section4Text9")}</span>
            </Flex>
          </Flex>
        </Flex>

        <Flex vertical gap={8}>
          <span style={{ fontSize: 25, fontWeight: 600 }}>
            {t("terms.section5Title")}
          </span>
          <span>{t("terms.section5Text1")}</span>
          <ul
            style={{
              marginLeft: 50,
              display: "flex",
              flexDirection: "column",
              gap: 5,
            }}
          >
            <li>{t("terms.section5List1")}</li>
            <li>{t("terms.section5List2")}</li>
            <li>{t("terms.section5List3")}</li>
          </ul>
          <span>{t("terms.section5Text2")}</span>
        </Flex>

        <Flex vertical gap={8}>
          <span style={{ fontSize: 25, fontWeight: 600 }}>
            {t("terms.section6Title")}
          </span>
          <Flex vertical gap={5}>
            <span>{t("terms.section6Text1")}</span>
            <span>{t("terms.section6Text2")}</span>
            <span>{t("terms.section6Text3")}</span>
          </Flex>
        </Flex>

        <Flex vertical gap={8}>
          <span style={{ fontSize: 25, fontWeight: 600 }}>
            {t("terms.section7Title")}
          </span>
          <Flex vertical gap={5}>
            <span>{t("terms.section7Text1")}</span>
            <ul
              style={{
                marginLeft: 50,
                display: "flex",
                flexDirection: "column",
                gap: 5,
              }}
            >
              <li>{t("terms.section7List1")}</li>
              <li>{t("terms.section7List2")}</li>
              <li>{t("terms.section7List3")}</li>
              <li>{t("terms.section7List4")}</li>
              <li>{t("terms.section7List5")}</li>
              <li>{t("terms.section7List6")}</li>
            </ul>
            <span>{t("terms.section7Text2")}</span>
          </Flex>
        </Flex>

        <Flex vertical gap={8}>
          <span style={{ fontSize: 25, fontWeight: 600 }}>
            {t("terms.section8Title")}
          </span>
          <Flex vertical gap={5}>
            <span>{t("terms.section8Text1")}</span>
            <span>{t("terms.section8Text2")}</span>
          </Flex>
        </Flex>

        <Flex vertical gap={8}>
          <span style={{ fontSize: 25, fontWeight: 600 }}>
            {t("terms.section9Title")}
          </span>
          <Flex vertical gap={5}>
            <span>{t("terms.section9Text1")}</span>
            <span>{t("terms.section9Text2")}</span>
            <Flex vertical>
              <span>{t("terms.section9Text3")}</span>
              <ul
                style={{
                  marginLeft: 50,
                  display: "flex",
                  flexDirection: "column",
                  gap: 5,
                }}
              >
                <li>{t("terms.section9List1")}</li>
                <li>{t("terms.section9List2")}</li>
              </ul>
            </Flex>
            <span>{t("terms.section9Text4")}</span>
          </Flex>
        </Flex>

        <Flex vertical gap={8}>
          <span style={{ fontSize: 25, fontWeight: 600 }}>
            {t("terms.section10Title")}
          </span>
          <Flex vertical gap={5}>
            <span>{t("terms.section10Text1")}</span>
            <span>{t("terms.section10Text2")}</span>
          </Flex>
        </Flex>

        <Flex vertical gap={8}>
          <span style={{ fontSize: 25, fontWeight: 600 }}>
            {t("terms.section11Title")}
          </span>
          <Flex vertical gap={5}>
            <span>{t("terms.section11Text1")}</span>
            <Flex vertical>
              <span>{t("terms.section11Text2")}</span>
              <ul
                style={{
                  marginLeft: 50,
                  display: "flex",
                  flexDirection: "column",
                  gap: 5,
                }}
              >
                <li>{t("terms.section11Item1")}</li>
                <li>{t("terms.section11Item2")}</li>
                <li>{t("terms.section11Item3")}</li>
              </ul>
            </Flex>
            <span>{t("terms.section11Text3")}</span>
          </Flex>
        </Flex>

        <Flex vertical gap={8}>
          <span style={{ fontSize: 25, fontWeight: 600 }}>
            {t("terms.section12Title")}
          </span>
          <Flex vertical gap={5}>
            <span>{t("terms.section12Text1")}</span>
            <span>{t("terms.section12Text2")}</span>
            <span>{t("terms.section12Text3")}</span>
          </Flex>
        </Flex>
        <Flex vertical gap={8}>
          <span style={{ fontSize: 25, fontWeight: 600 }}>
            {t("terms.section13Title")}
          </span>
          <Flex vertical gap={5}>
            <span>{t("terms.section13Text1")}</span>
            <span>{t("terms.section13Text2")}</span>
          </Flex>
        </Flex>
        <Flex vertical gap={8}>
          <span style={{ fontSize: 25, fontWeight: 600 }}>
            {t("terms.section14Title")}
          </span>
          <Flex vertical gap={5}>
            <span>{t("terms.section14Text1")}</span>
            <span>{t("terms.section14Text2")}</span>
          </Flex>
        </Flex>
      </Flex>
      {/* <Flex vertical className="main-container">
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
      <Flex>terms</Flex>
      <div className="footer">
        <Flex style={{ background: "red" }}>
          <LinkedinOutlined />
          <span>
            <Link href={"/terms-and-conditions"}>Terms</Link>
          </span>
        </Flex>
        © 2025 ASAC. {t("allRights")}
      </div> */}
    </div>
  );
}
