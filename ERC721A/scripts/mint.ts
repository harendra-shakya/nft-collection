const { ethers } = require("hardhat");

const BLOCKS = 2;

async function mint() {
    console.log("minting....");
    const erc721a = await ethers.getContract("PurpleEye")
    const tx = await erc721a.mint(15, {value: ethers.utils.parseEther("0.1")});
    const txReceipt = await tx.wait();
    console.log("minted");
}

mint()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
