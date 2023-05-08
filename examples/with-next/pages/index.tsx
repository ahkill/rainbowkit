import { ConnectButton } from '@rainbow-me/rainbowkit';
import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
   <div id="page">
     <div className="wallet-drawer">
        <div className="drawer-item web3">
          <div className="connect-wallet">
            <div className="connect-btn">
               <ConnectButton />
            </div>
          </div>
        </div>
     </div>
   </div>
  );
};

export default Home;
