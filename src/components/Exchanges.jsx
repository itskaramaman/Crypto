import React from 'react';
import HTMLReactParser from 'html-react-parser';
import { Table } from 'antd';

import { useGetCryptoExchangesQuery, useGetCryptoDetailsQuery } from '../services/cryptoAPI';

const Exchanges = () => {
  const {data, isFetching} = useGetCryptoExchangesQuery();
  const {data: coinDetails, isFetching: detailsFetching} = useGetCryptoDetailsQuery('Qwsogvtv82FCd');

  if(isFetching) return "Loading...";
  if(detailsFetching) return "Loading...";
  console.log(data);
  const exchangeData = data?.data?.exchanges;

  const columns = [
    {
      title: 'Exchanges',
      dataIndex: 'name',
      key: 'exchanges',
    },
    {
      title: '24hr Trade Volume',
      dataIndex: '24hVolume',
      key: '24hVolume',
    },
    {
      title: 'Markets',
      dataIndex: 'numberOfMarkets',
      key: 'markets',
    },
    {
      title: 'Change',
      dataIndex: 'change',
      key: 'change',
    }
  ];
  
  return (
    <>
      <Table dataSource={exchangeData} columns={columns} />
    </>
  )
}

export default Exchanges