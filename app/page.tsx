import { Flex } from "antd";
import Image from "next/image";
import "antd/dist/reset.css";
import ServiceCarousel from "@/components/ServiceCarousel";
import CustomModal from "@/components/CustomModal";

export default function Home() {
  return (
    <div>
      <Flex vertical className="main-container">
        <Flex justify="center">
          <Flex
            className="wrapper-nav"
            style={{
              width: "75%",
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
            <CustomModal buttonText="Contact Us" showInfo={true} />
          </Flex>
        </Flex>
        <Flex style={{ padding: "30px 0", height: "100%" }} gap={30} vertical>
          <Flex vertical align="center">
            <Flex className="title-container" vertical align="center" gap={20}>
              <Flex
                justify="center"
                style={{
                  fontSize: 55,
                  textAlign: "center",
                  fontWeight: 600,
                }}
              >
                Done right, every time.
              </Flex>
              <Flex style={{ textAlign: "center", lineHeight: 1.6 }}>
                Our domestic services platform instantly connects you with
                skilled professionals — no guesswork, clear prices, and
                transparent progress — ensuring stress-free services at your
                fingertips.
              </Flex>
            </Flex>
          </Flex>
          <Flex style={{ height: "100%" }} justify="center">
            <div className="demo" style={{ position: "relative" }}>
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
            gap={20}
          >
            <Image
              className="arrow"
              style={{ position: "absolute", top: -20, left: "41%" }}
              src={"/image.png"}
              width={30}
              height={65}
              alt=""
            />
            <span style={{ fontSize: 25, color: "white", fontWeight: 600 }}>
              Coming soon ...
            </span>

            <CustomModal buttonText="Register here" showInfo={false} />
          </Flex>
        </Flex>
      </Flex>
      <Flex>
        <Flex
          style={{
            width: "100%",
            color: "white",
          }}
          justify="center"
        >
          <Flex className="content-container" vertical gap={50} align="center">
            <Flex
              style={{
                padding: "25px 20px",
                fontSize: 32,
                fontWeight: 700,
                color: "black",
                position: "relative",
              }}
            >
              <span>Find a Service</span>
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
            </Flex>

            <ServiceCarousel />

            <Flex className="qa-container">
              <Flex
                vertical
                gap={20}
                style={{ backgroundColor: "white", marginLeft: 5, padding: 20 }}
              >
                <span
                  style={{
                    fontSize: 25,
                    fontWeight: 700,
                    color: "rgb(72, 153, 247)",
                  }}
                >
                  What we do
                </span>
                <span style={{ color: "black", lineHeight: 1.6 }}>
                  We connect clients with professional contractors to meet the
                  full spectrum of each home’s needs. We ensure every project is
                  completed fairly, effectively, and efficiently. From service
                  browsing, to deal-making, to project tracking, we aim for
                  excellence at every step.
                </span>
              </Flex>
            </Flex>
            <Flex className="qa-container">
              <Flex
                vertical
                gap={20}
                style={{ backgroundColor: "white", marginLeft: 5, padding: 20 }}
              >
                <span
                  style={{
                    fontSize: 25,
                    fontWeight: 700,
                    color: "rgb(72, 153, 247)",
                  }}
                >
                  How we do it
                </span>
                <span style={{ color: "black", lineHeight: 1.6 }}>
                  You browse, choose, connect; sign, track, and pay. We make
                  sure to keep it prompt, reliable, and catered to your needs.
                  Because information and transparency are often neglected, we
                  made it a priority.
                </span>
              </Flex>
            </Flex>

            <Flex className="qa-container">
              <Flex
                vertical
                gap={20}
                style={{ backgroundColor: "white", marginLeft: 5, padding: 20 }}
              >
                <span
                  style={{
                    fontSize: 25,
                    fontWeight: 700,
                    color: "rgb(72, 153, 247)",
                  }}
                >
                  Who we serve
                </span>
                <span style={{ color: "black", lineHeight: 1.6 }}>
                  Individuals and SMB’s who seek the completion of small-medium
                  sized tasks, recurrent or non-recurrent. Contractors, both
                  individuals and businesses, with expertise in the tangent
                  sub-industries of domestic services, looking to expand their
                  operations, while adhering to our standards.
                </span>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
      <div className="footer">© 2025 ASAC. All rights reserved</div>
    </div>
  );
}
