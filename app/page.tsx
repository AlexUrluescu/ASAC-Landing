import { Button, Flex } from "antd";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Flex vertical align="center">
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
      </Flex>
    </div>
  );
}
