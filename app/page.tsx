import { Button, Flex } from "antd";

export default function Home() {
  return (
    <div>
      <Flex vertical align="center">
        <Flex
          align="center"
          style={{
            width: "80%",
            // backgroundColor: "red",
            padding: "20px 0px",
          }}
          vertical
          gap={100}
        >
          <Flex style={{ width: "80%" }} vertical gap={50}>
            <Flex
              justify="center"
              align="center"
              style={{
                height: 450,
                // width: "80%",
                backgroundColor: "#f0f0f0",
                marginTop: 60,
                border: "1px solid #d9d9d9",
              }}
            >
              DEMO
            </Flex>
            <Flex align="center" vertical gap={30}>
              <span style={{ fontSize: 30 }}>Coming soon ...</span>
              <Button
                style={{ borderRadius: 0, width: 250, height: 40 }}
                type="primary"
                // onClick={() => router.push("/register")}
              >
                Register here
              </Button>
            </Flex>
          </Flex>
          <Flex
            style={{ width: "80%", marginBottom: 60 }}
            vertical
            gap={50}
            align="center"
          >
            <Flex vertical gap={5}>
              <span style={{ fontSize: 20, color: "black" }}>USP</span>
              <span>
                Fixed right, every time. Our domestic services platform
                instantly connects you with skilled professionals — no
                guesswork, clear prices, and transparent progress — ensuring
                stress-free service at your fingertips.
              </span>
            </Flex>
            <Flex vertical gap={5}>
              <span style={{ fontSize: 20, color: "black" }}>What we do</span>
              <span>
                We connect clients with professional contractors to meet the
                full spectrum of each home’s needs. We ensure every project is
                completed fairly, effectively, and efficiently. From service
                browsing, to deal-making, to project tracking, we aim for
                excellence at every step.
              </span>
            </Flex>
            <Flex vertical gap={5}>
              <span style={{ fontSize: 20, color: "black" }}>How we do it</span>
              <span>
                You browse, choose, connect; sign, track, and pay. We make sure
                to keep it prompt, reliable, and catered to your needs. Because
                information and transparency are often neglected, we made it a
                priority.
              </span>
            </Flex>

            <Flex vertical gap={5}>
              <span style={{ fontSize: 20, color: "black" }}>Who we serve</span>
              <span>
                Individuals and SMB’s who seek the completion of small-medium
                sized tasks, recurrent or non-recurrent. Contractors, both
                individuals and businesses, with expertise in the tangent
                sub-industries of domestic services, looking to expand their
                operations, while adhering to our standards.
              </span>
            </Flex>
          </Flex>

          <Flex
            style={{
              width: "80%",
            }}
            vertical
            align="center"
            gap={25}
          >
            <span style={{ fontSize: 30 }}>Contact Us</span>
            <Flex>
              <Button
                style={{ borderRadius: 0, width: 250, height: 40 }}
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
