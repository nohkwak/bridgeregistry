/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { ethers } from "ethers";
import {
  FactoryOptions,
  HardhatEthersHelpers as HardhatEthersHelpersBase,
} from "@nomiclabs/hardhat-ethers/types";

import * as Contracts from ".";

declare module "hardhat/types/runtime" {
  interface HardhatEthersHelpers extends HardhatEthersHelpersBase {
    getContractFactory(
      name: "MinterRole",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.MinterRole__factory>;
    getContractFactory(
      name: "ERC165",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC165__factory>;
    getContractFactory(
      name: "IERC165",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC165__factory>;
    getContractFactory(
      name: "Ownable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Ownable__factory>;
    getContractFactory(
      name: "ERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC20__factory>;
    getContractFactory(
      name: "ERC20Burnable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC20Burnable__factory>;
    getContractFactory(
      name: "ERC20Mintable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC20Mintable__factory>;
    getContractFactory(
      name: "IERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20__factory>;
    getContractFactory(
      name: "ERC721",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC721__factory>;
    getContractFactory(
      name: "ERC721Burnable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC721Burnable__factory>;
    getContractFactory(
      name: "ERC721Enumerable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC721Enumerable__factory>;
    getContractFactory(
      name: "ERC721Full",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC721Full__factory>;
    getContractFactory(
      name: "ERC721Metadata",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC721Metadata__factory>;
    getContractFactory(
      name: "ERC721MetadataMintable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC721MetadataMintable__factory>;
    getContractFactory(
      name: "IERC721",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC721__factory>;
    getContractFactory(
      name: "IERC721Enumerable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC721Enumerable__factory>;
    getContractFactory(
      name: "IERC721Metadata",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC721Metadata__factory>;
    getContractFactory(
      name: "IERC721Receiver",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC721Receiver__factory>;
    getContractFactory(
      name: "Bridge",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Bridge__factory>;
    getContractFactory(
      name: "BridgeCounterPart",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.BridgeCounterPart__factory>;
    getContractFactory(
      name: "BridgeFee",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.BridgeFee__factory>;
    getContractFactory(
      name: "BridgeHandledRequests",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.BridgeHandledRequests__factory>;
    getContractFactory(
      name: "BridgeOperator",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.BridgeOperator__factory>;
    getContractFactory(
      name: "BridgeTokens",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.BridgeTokens__factory>;
    getContractFactory(
      name: "BridgeTransfer",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.BridgeTransfer__factory>;
    getContractFactory(
      name: "BridgeTransferERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.BridgeTransferERC20__factory>;
    getContractFactory(
      name: "BridgeTransferERC721",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.BridgeTransferERC721__factory>;
    getContractFactory(
      name: "BridgeTransferKLAY",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.BridgeTransferKLAY__factory>;
    getContractFactory(
      name: "IBridgeTokens",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IBridgeTokens__factory>;
    getContractFactory(
      name: "IERC20Token",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20Token__factory>;
    getContractFactory(
      name: "IERC721Token",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC721Token__factory>;
    getContractFactory(
      name: "StringUtil",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.StringUtil__factory>;
    getContractFactory(
      name: "NetworkKeyModel",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.NetworkKeyModel__factory>;
    getContractFactory(
      name: "ERC20ServiceChain",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC20ServiceChain__factory>;
    getContractFactory(
      name: "IERC20BridgeReceiver",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20BridgeReceiver__factory>;
    getContractFactory(
      name: "ServiceChainToken",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ServiceChainToken__factory>;
    getContractFactory(
      name: "ERC721ServiceChain",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC721ServiceChain__factory>;
    getContractFactory(
      name: "IERC721BridgeReceiver",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC721BridgeReceiver__factory>;
    getContractFactory(
      name: "ServiceChainNFT",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ServiceChainNFT__factory>;
    getContractFactory(
      name: "ServiceBridge",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ServiceBridge__factory>;
    getContractFactory(
      name: "ServiceNetwork",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ServiceNetwork__factory>;
    getContractFactory(
      name: "ChildBridgeTest",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ChildBridgeTest__factory>;
    getContractFactory(
      name: "ParentBridgeTest",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ParentBridgeTest__factory>;
    getContractFactory(
      name: "ERC20Test01",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC20Test01__factory>;
    getContractFactory(
      name: "ERC20Test02",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC20Test02__factory>;
    getContractFactory(
      name: "ERC20Test03",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC20Test03__factory>;
    getContractFactory(
      name: "ERC20Test04",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC20Test04__factory>;
    getContractFactory(
      name: "ERC20Test05",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC20Test05__factory>;
    getContractFactory(
      name: "ERC20Test06",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC20Test06__factory>;
    getContractFactory(
      name: "TokenListCallTest",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.TokenListCallTest__factory>;

    getContractAt(
      name: "MinterRole",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.MinterRole>;
    getContractAt(
      name: "ERC165",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC165>;
    getContractAt(
      name: "IERC165",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC165>;
    getContractAt(
      name: "Ownable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Ownable>;
    getContractAt(
      name: "ERC20",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC20>;
    getContractAt(
      name: "ERC20Burnable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC20Burnable>;
    getContractAt(
      name: "ERC20Mintable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC20Mintable>;
    getContractAt(
      name: "IERC20",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC20>;
    getContractAt(
      name: "ERC721",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC721>;
    getContractAt(
      name: "ERC721Burnable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC721Burnable>;
    getContractAt(
      name: "ERC721Enumerable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC721Enumerable>;
    getContractAt(
      name: "ERC721Full",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC721Full>;
    getContractAt(
      name: "ERC721Metadata",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC721Metadata>;
    getContractAt(
      name: "ERC721MetadataMintable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC721MetadataMintable>;
    getContractAt(
      name: "IERC721",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC721>;
    getContractAt(
      name: "IERC721Enumerable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC721Enumerable>;
    getContractAt(
      name: "IERC721Metadata",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC721Metadata>;
    getContractAt(
      name: "IERC721Receiver",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC721Receiver>;
    getContractAt(
      name: "Bridge",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Bridge>;
    getContractAt(
      name: "BridgeCounterPart",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.BridgeCounterPart>;
    getContractAt(
      name: "BridgeFee",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.BridgeFee>;
    getContractAt(
      name: "BridgeHandledRequests",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.BridgeHandledRequests>;
    getContractAt(
      name: "BridgeOperator",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.BridgeOperator>;
    getContractAt(
      name: "BridgeTokens",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.BridgeTokens>;
    getContractAt(
      name: "BridgeTransfer",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.BridgeTransfer>;
    getContractAt(
      name: "BridgeTransferERC20",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.BridgeTransferERC20>;
    getContractAt(
      name: "BridgeTransferERC721",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.BridgeTransferERC721>;
    getContractAt(
      name: "BridgeTransferKLAY",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.BridgeTransferKLAY>;
    getContractAt(
      name: "IBridgeTokens",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IBridgeTokens>;
    getContractAt(
      name: "IERC20Token",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC20Token>;
    getContractAt(
      name: "IERC721Token",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC721Token>;
    getContractAt(
      name: "StringUtil",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.StringUtil>;
    getContractAt(
      name: "NetworkKeyModel",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.NetworkKeyModel>;
    getContractAt(
      name: "ERC20ServiceChain",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC20ServiceChain>;
    getContractAt(
      name: "IERC20BridgeReceiver",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC20BridgeReceiver>;
    getContractAt(
      name: "ServiceChainToken",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ServiceChainToken>;
    getContractAt(
      name: "ERC721ServiceChain",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC721ServiceChain>;
    getContractAt(
      name: "IERC721BridgeReceiver",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC721BridgeReceiver>;
    getContractAt(
      name: "ServiceChainNFT",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ServiceChainNFT>;
    getContractAt(
      name: "ServiceBridge",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ServiceBridge>;
    getContractAt(
      name: "ServiceNetwork",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ServiceNetwork>;
    getContractAt(
      name: "ChildBridgeTest",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ChildBridgeTest>;
    getContractAt(
      name: "ParentBridgeTest",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ParentBridgeTest>;
    getContractAt(
      name: "ERC20Test01",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC20Test01>;
    getContractAt(
      name: "ERC20Test02",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC20Test02>;
    getContractAt(
      name: "ERC20Test03",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC20Test03>;
    getContractAt(
      name: "ERC20Test04",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC20Test04>;
    getContractAt(
      name: "ERC20Test05",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC20Test05>;
    getContractAt(
      name: "ERC20Test06",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC20Test06>;
    getContractAt(
      name: "TokenListCallTest",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.TokenListCallTest>;

    // default types
    getContractFactory(
      name: string,
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<ethers.ContractFactory>;
    getContractFactory(
      abi: any[],
      bytecode: ethers.utils.BytesLike,
      signer?: ethers.Signer
    ): Promise<ethers.ContractFactory>;
    getContractAt(
      nameOrAbi: string | any[],
      address: string,
      signer?: ethers.Signer
    ): Promise<ethers.Contract>;
  }
}
