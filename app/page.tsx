import { Button, Carousel, Flex } from "antd";
import Image from "next/image";
import "antd/dist/reset.css"; // Ensure Ant Design CSS is imported
import ServiceCarousel from "@/components/ServiceCarousel";

const contentStyle: React.CSSProperties = {
  margin: 0,
  height: "100px",
  color: "#fff",
  textAlign: "center",
  background: "#364d79",
};

export default function Home() {
  return (
    <div>
      <Flex vertical className="main-container">
        <Flex justify="center">
          <Flex
            className="wrapper-nav"
            style={{
              width: "75%",
              // backgroundColor: "blue",
              padding: "15px 0",
              // borderBottom: "1px solid white",
            }}
            align="center"
            justify="space-between"
          >
            <Flex gap={10} align="center">
              <Flex
                style={{
                  padding: "6px 13px",
                  fontSize: 25,
                  fontWeight: 700,
                  backgroundColor: "transparent",
                  borderRadius: "50%",
                  color: "white",
                  border: "1px solid white",
                }}
              >
                A
              </Flex>{" "}
              <span style={{ fontSize: 20, fontWeight: 600, color: "white" }}>
                ASAC
              </span>
            </Flex>
            {/* <Flex style={{ color: "white" }} gap={30}>
            <span>Home</span> <span>About us</span> <span>Our Team</span>{" "}
            <span>Pricing</span> <span>Blog</span> <span>Contact</span>
          </Flex> */}
            <Flex gap={20}>
              <button
                style={{
                  border: "none",
                  backgroundColor: "transparent",
                  fontWeight: 600,
                  color: "white",
                  cursor: "pointer",
                }}
              >
                Login
              </button>
              <button
                style={{
                  border: "none",
                  borderRadius: "10px",
                  backgroundColor: "#FF821E",
                  padding: "15px 20px",
                  fontWeight: 600,
                  color: "white",
                  cursor: "pointer",
                }}
              >
                Sign Up free
              </button>
            </Flex>
          </Flex>
        </Flex>
        <Flex style={{ padding: "30px 0" }} gap={30} vertical>
          <Flex vertical align="center">
            <Flex
              vertical
              align="center"
              gap={20}
              style={{ width: "60%", color: "white" }}
            >
              <Flex
                justify="center"
                style={{ fontSize: 55, textAlign: "center" }}
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
          <Flex justify="center">
            <Flex
              style={{
                backgroundColor: "#f7f7f7",
                width: "60%",
                height: 400,
                borderRadius: 10,
              }}
              justify="center"
              align="center"
            >
              Demo
            </Flex>
          </Flex>
          <Flex
            align="center"
            style={{ position: "relative" }}
            vertical
            gap={20}
          >
            <Image
              style={{ position: "absolute", top: -20, left: "39%" }}
              src={"/image.png"}
              width={30}
              height={65}
              alt=""
            />
            <span style={{ fontSize: 23, color: "white", fontWeight: 600 }}>
              Coming soon ...
            </span>
            <button
              style={{
                border: "none",
                borderRadius: "10px",
                // backgroundColor: "#4899F7",
                padding: "15px 20px",
                fontWeight: 600,
                width: 250,
                color: "black",
                cursor: "pointer",
              }}
            >
              Register here
            </button>
          </Flex>
          {/* <Flex>
          <Flex gap={30} align="center" style={{ width: "25%" }} vertical>
            <Flex>
              <Image
                style={{ borderRadius: 20 }}
                src={"/poza1.png"}
                height={280}
                width={280}
                alt=""
              />
            </Flex>
            <Flex justify="center" style={{ color: "white" }}>
              <Flex gap={7} style={{ padding: 10 }} vertical>
                <span style={{ fontSize: 30 }}>15+</span>
                <span style={{ fontSize: 12 }}>Years of experience</span>
              </Flex>
              <Flex gap={7} style={{ padding: 10 }} vertical>
                <span style={{ fontSize: 30 }}>84k</span>
                <span style={{ fontSize: 12 }}>Customers worldwide</span>
              </Flex>
            </Flex>
          </Flex>

          <Flex gap={20} align="center" style={{ width: "50%" }} vertical>
            <Flex align="center" gap={50}>
              <button
                style={{
                  border: "none",
                  borderRadius: "20px",
                  backgroundColor: "#48f7a8",
                  padding: "15px 20px",
                  fontWeight: 600,
                }}
              >
                Get Trial Project
              </button>
              <span style={{ color: "white" }}>Watch Demo</span>
            </Flex>
            <Flex>
              {" "}
              <Image
                style={{ borderRadius: 20 }}
                src={"/poza2.png"}
                height={370}
                width={600}
                alt=""
              />
            </Flex>
          </Flex>

          <Flex gap={30} align="center" style={{ width: "25%" }} vertical>
            <Flex>
              <Image
                style={{ borderRadius: 20 }}
                src={"/poza3.png"}
                height={280}
                width={280}
                alt=""
              />
            </Flex>
            <Flex justify="center" style={{ color: "white" }}>
              <Flex style={{ padding: 10, position: "relative" }}>
                <Image
                  style={{
                    borderRadius: "50%",
                    objectFit: "cover",
                    marginRight: -15, // Overlaps the next image
                    zIndex: 3, // Ensures proper layering
                  }}
                  src={"/om1.png"}
                  height={50}
                  width={50}
                  alt=""
                />
                <Image
                  style={{
                    borderRadius: "50%",
                    objectFit: "cover",
                    marginRight: -15, // Overlaps the next image
                    zIndex: 2, // Slightly lower in the stack
                  }}
                  src={"/om2.png"}
                  height={50}
                  width={50}
                  alt=""
                />
                <Image
                  style={{
                    borderRadius: "50%",
                    objectFit: "cover",
                    zIndex: 1, // Lowest in the stack
                  }}
                  src={"/om3.jpg"}
                  height={50}
                  width={50}
                  alt=""
                />
              </Flex>

              <Flex gap={7} style={{ padding: 10 }} vertical>
                <span style={{ fontSize: 30 }}>140k</span>
                <span style={{ fontSize: 12 }}>Happy Customers</span>
              </Flex>
            </Flex>
          </Flex>
        </Flex> */}
        </Flex>
      </Flex>
      <Flex>
        <Flex
          style={{
            width: "100%",
            color: "white",
            // backgroundColor: "#5F4842",
          }}
          justify="center"
        >
          <Flex
            style={{
              width: "80%",
              padding: 50,
              // backgroundColor: "red"
            }}
            vertical
            gap={50}
            align="center"
          >
            <Flex
              style={{
                // backgroundColor: "blue",
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

            <Flex
              style={{
                backgroundColor: "rgb(72, 153, 247)",
                borderRadius: 15,
                width: "80%",
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.15)",
                overflow: "hidden",
              }}
            >
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
            <Flex
              style={{
                backgroundColor: "rgb(72, 153, 247)",
                borderRadius: 15,
                width: "80%",
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.15)",
                overflow: "hidden",
              }}
            >
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

            <Flex
              style={{
                backgroundColor: "rgb(72, 153, 247)",
                borderRadius: 15,
                width: "80%",
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.15)",
                overflow: "hidden",
              }}
            >
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
      <Flex justify="center" align="center" className="footer">
        © 2025 ASAC. All rights reserved
      </Flex>
    </div>
  );
}
