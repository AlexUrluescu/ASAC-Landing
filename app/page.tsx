import { Button, Flex } from "antd";
import Image from "next/image";

export default function Home() {
  return (
    <div className="main-container">
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
                borderRadius: "20px",
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
              Our domestic services platform instantly connects you with skilled
              professionals — no guesswork, clear prices, and transparent
              progress — ensuring stress-free services at your fingertips.
            </Flex>
          </Flex>
        </Flex>
        <Flex justify="center">
          <Flex
            style={{ backgroundColor: "#f7f7f7", width: "60%", height: 400 }}
            justify="center"
            align="center"
          >
            Demo
          </Flex>
        </Flex>
        <Flex align="center" style={{ position: "relative" }} vertical gap={20}>
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
              borderRadius: "20px",
              backgroundColor: "#4899F7",
              padding: "15px 20px",
              fontWeight: 600,
              width: 250,
              color: "white",
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
            style={{ width: "80%", padding: 50 }}
            vertical
            gap={50}
            align="center"
          >
            <Flex
              vertical
              gap={5}
              style={{
                backgroundColor: "#FF821E",
                padding: "30px 20px",
                borderRadius: 15,
              }}
            >
              <span style={{ fontSize: 25, fontWeight: 700 }}>What we do</span>
              <span>
                We connect clients with professional contractors to meet the
                full spectrum of each home’s needs. We ensure every project is
                completed fairly, effectively, and efficiently. From service
                browsing, to deal-making, to project tracking, we aim for
                excellence at every step.
              </span>
            </Flex>
            <Flex
              vertical
              gap={5}
              style={{
                backgroundColor: "#FF821E",
                padding: "30px 20px",
                borderRadius: 15,
              }}
            >
              <span style={{ fontSize: 25, fontWeight: 700 }}>
                How we do it
              </span>
              <span>
                You browse, choose, connect; sign, track, and pay. We make sure
                to keep it prompt, reliable, and catered to your needs. Because
                information and transparency are often neglected, we made it a
                priority.
              </span>
            </Flex>

            <Flex
              vertical
              gap={5}
              style={{
                backgroundColor: "#FF821E",
                padding: "30px 20px",
                borderRadius: 15,
              }}
            >
              <span style={{ fontSize: 25, fontWeight: 700 }}>
                Who we serve
              </span>
              <span>
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
      <Flex justify="center" align="center" className="footer">
        @copyrights ASAC
      </Flex>
      {/* <Flex vertical align="center">
        <Flex
          align="center"
          style={
            {
              // width: "80%",
              // backgroundColor: "red",
            }
          }
          vertical
          gap={60}
        >
          <Flex
            style={{
              width: "100%",
              color: "white",
              backgroundColor: "#5F4842",
              padding: "30px 50px",
            }}
            justify="center"
          >
            <Flex style={{ width: "80%", color: "white" }} vertical gap={10}>
              <Flex
                justify="center"
                style={{
                  fontSize: 25,
                  fontWeight: 700,
                }}
              >
                USP
              </Flex>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  textAlign: "center",
                }}
              >
                Fixed right, every time. Our domestic services platform
                instantly connects you with skilled professionals — no
                guesswork, clear prices, and transparent progress — ensuring
                stress-free service at your fingertips.
              </div>
            </Flex>
          </Flex>
          <Flex
            style={{
              width: "80%",
              // backgroundColor: "red",
            }}
            vertical
            gap={50}
          >
            <Flex justify="center">
              <Flex
                justify="center"
                align="center"
                style={{
                  height: 400,
                  // width: 800,
                  width: "80%",
                  backgroundColor: "#f0f0f0",

                  border: "1px solid #d9d9d9",
                }}
              >
                DEMO
              </Flex>
            </Flex>

            <Flex
              style={{
                // backgroundColor: "purple",
                position: "relative",
              }}
              justify="center"
              gap={20}
            >
              <Flex
                style={{
                  // backgroundColor: "orange",
                  justifyContent: "center",
                  alignItems: "center",
                  position: "absolute",
                  top: "-50%",
                  right: "10%",
                }}
              >
                <Image src={"/image2.png"} width={60} height={140} alt="" />
              </Flex>
              <Flex
                style={{
                  // backgroundColor: "orange",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Image src={"/image.png"} width={30} height={80} alt="" />
              </Flex>
              <Flex align="center" vertical gap={50}>
                <span style={{ fontSize: 60 }}>Coming soon ...</span>

                <Button
                  style={{ borderRadius: 0, width: "100%", height: 40 }}
                  type="primary"
                  // onClick={() => router.push("/register")}
                >
                  Register here
                </Button>
              </Flex>
            </Flex>
          </Flex>
          <Flex
            style={{
              width: "100%",
              color: "white",
              backgroundColor: "#5F4842",
            }}
            justify="center"
          >
            <Flex
              style={{ width: "80%", padding: 50 }}
              vertical
              gap={50}
              align="center"
            >
              <Flex vertical gap={5}>
                <span style={{ fontSize: 25, fontWeight: 700 }}>
                  What we do
                </span>
                <span>
                  We connect clients with professional contractors to meet the
                  full spectrum of each home’s needs. We ensure every project is
                  completed fairly, effectively, and efficiently. From service
                  browsing, to deal-making, to project tracking, we aim for
                  excellence at every step.
                </span>
              </Flex>
              <Flex vertical gap={5}>
                <span style={{ fontSize: 25, fontWeight: 700 }}>
                  How we do it
                </span>
                <span>
                  You browse, choose, connect; sign, track, and pay. We make
                  sure to keep it prompt, reliable, and catered to your needs.
                  Because information and transparency are often neglected, we
                  made it a priority.
                </span>
              </Flex>

              <Flex vertical gap={5}>
                <span style={{ fontSize: 25, fontWeight: 700 }}>
                  Who we serve
                </span>
                <span>
                  Individuals and SMB’s who seek the completion of small-medium
                  sized tasks, recurrent or non-recurrent. Contractors, both
                  individuals and businesses, with expertise in the tangent
                  sub-industries of domestic services, looking to expand their
                  operations, while adhering to our standards.
                </span>
              </Flex>
            </Flex>
          </Flex>

          <Flex
            style={{
              width: "80%",
              marginBottom: 60,
            }}
            vertical
            align="center"
            gap={25}
          >
            <span style={{ fontSize: 50 }}>Contact Us</span>
            <Flex style={{ width: "30%" }}>
              <Button
                style={{ borderRadius: 0, width: "100%", height: 40 }}
                type="primary"
                // onClick={() => router.push("/landing-email")}
              >
                Complete the form
              </Button>
            </Flex>
          </Flex>
        </Flex>
      </Flex> */}
    </div>
  );
}
