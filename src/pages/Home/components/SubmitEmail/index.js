import React from "react";
import { Button, Input } from "antd";
import validator from "email-validator";

import { useWindowDimensions } from "../../../../components/WindowDimensionsProvider";

const SubmitEmail = () => {
  const { isDesktop } = useWindowDimensions();
  const [disabled, setDisabled] = React.useState(true);
  const [email, setEmail] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [message, setMessage] = React.useState();

  function handleEmailChange(email) {
    setEmail(email);
    setDisabled(!validator.validate(email));
  }

  async function handleEmailSubmit(email) {
    setLoading(true);
    const response = await fetch(
      "https://data.thistothat.io/account/request_api_key/",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
        }),
      }
    );

    if (response.status === 200) {
      setEmail("");
      setMessage("Thanks! Check your email for an API key.");
    } else {
      setMessage("There was an error :(");
    }
    setLoading(false);
  }

  return (
    <div>
      <Input.Search
        disabled={loading}
        enterButton={
          <Button disabled={disabled || loading} loading={loading}>
            GET API KEY
          </Button>
        }
        onChange={(e) => handleEmailChange(e.target.value)}
        onSearch={(value) => handleEmailSubmit(value)}
        placeholder="Email"
        size={isDesktop ? "large" : "middle"}
        value={email}
      />
      <div className="message">{message}</div>
    </div>
  );
};

export default SubmitEmail;
