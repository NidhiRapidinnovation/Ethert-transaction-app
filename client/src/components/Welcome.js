import React, { useContext } from "react";
import { AiFillPlayCircle } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { TransactionContext } from "../context/TransactionContext";
import { shortenAddress } from "../utils/shortenAddress";
import WalletIcon from "../Images/WalletIcon.svg";
import EthereumIcon from "../Images/ethereumLogo.svg";
import { Input } from "./Input";
import {
  Address,
  BannerWrapper,
  Button,
  ButtonWrapper,
  Chain,
  Form,
  FormWrapper,
  Heading,
  InfoWrapper,
  InputWrapper,
  Logo,
  Root,
  Text,
} from "./styledComponent/WelcomeStyleComponent";

const Welcome = () => {
  const {
    currentAccount,
    connectWallet,
    handleChange,
    sendTransaction,
    formData,
    isLoading,
  } = useContext(TransactionContext);

  const handleSubmit = (e) => {
    const { addressTo, amount, keyword, message } = formData;

    e.preventDefault();

    if (!addressTo || !amount || !keyword || !message) return;

    sendTransaction();
  };

  return (
    <Root>
      <BannerWrapper>
        <Heading>Send Ethereum across the world</Heading>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </Text>
        {!currentAccount && (
          <Button type="button" onClick={connectWallet}>
            <Logo src={WalletIcon} />
            Connect Wallet
          </Button>
        )}
      </BannerWrapper>
      <Form>
        <InfoWrapper>
          <BsInfoCircle fontSize={20} color="#fff" />
          <Address>{currentAccount}</Address>
          <Chain>
            <Logo src={EthereumIcon} alt="logo" /> Ethereum
          </Chain>
        </InfoWrapper>

        <FormWrapper>
          <InputWrapper>
            <Input
              placeholder="Address To"
              name="addressTo"
              type="text"
              handleChange={handleChange}
            />
          </InputWrapper>
          <InputWrapper>
            <Input
              placeholder="Amount (ETH)"
              name="amount"
              type="number"
              handleChange={handleChange}
            />
          </InputWrapper>
          <InputWrapper>
            <Input
              placeholder="Keyword (Gif)"
              name="keyword"
              type="text"
              handleChange={handleChange}
            />
          </InputWrapper>
          <InputWrapper>
            <Input
              placeholder="Enter Message"
              name="message"
              type="text"
              handleChange={handleChange}
            />
          </InputWrapper>
          <ButtonWrapper>
            {isLoading ? (
              <>Loading...</>
            ) : (
              <Button type="button" onClick={handleSubmit}>
                Send now
              </Button>
            )}
          </ButtonWrapper>
        </FormWrapper>
      </Form>
    </Root>
  );
};

export default Welcome;
