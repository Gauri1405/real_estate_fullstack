import React, {useState} from 'react'
import ChatInput from './components/ChatInput'
import SummaryCard from './components/SummaryCard'
import TrendsChart from './components/TrendsChart'
import DataTable from './components/DataTable'
import axios from 'axios'
import { API_URL } from "./config";
const res = await axios.post(API_URL, { query });

export default function App(){
  const [summary,setSummary] = useState(null)
  const [chart,setChart] = useState([])
  const [table,setTable] = useState([])
  const [loading,setLoading] = useState(false)

  async function handleQuery(q){
    setLoading(true)
    try{
      const res = await axios.post('http://localhost:8000/api/analyze/', {query: q})
      setSummary(res.data.summary)
      setChart(res.data.chart)
      setTable(res.data.table)
    }catch(e){
      alert('Error contacting backend. Make sure backend is running.')
    }
    setLoading(false)
  }

  return (<div className='container mt-4'>
    <h2 className='text-primary text-center'>Real Estate Analyst Chatbot</h2>
    <div className='row'>
      <div className='col-md-4'>
        <ChatInput onSearch={handleQuery} />
        {loading && <div className='mt-3'>Loading...</div>}
        {summary && <SummaryCard text={summary} />}
      </div>
      <div className='col-md-8'>
        {chart.length>0 && <TrendsChart data={chart} />}
        {table.length>0 && <DataTable rows={table} />}
      </div>
    </div>
  </div>)
}
