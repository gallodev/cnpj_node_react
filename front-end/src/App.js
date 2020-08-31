import React , { useState } from 'react';
import './App.css';
import Search from './components/Search';
import DataTable from './components/DataTable';
import SearchList from './components/SearchList';
import { format_company_data } from './utils';
import axios from 'axios';
import { API_URL , RECEITA_URL , RESOURCES } from './config';
import { Button } from "react-bootstrap";

const jsonp = require('jsonp');

function App() {   

  const [company,setCompany] = useState('');
  const [companyAutoComplete,setCompanyAutoComplete]  = useState('');
  const [searchValue,setSearchValue] = useState('');

  const API = API_URL+RESOURCES.empresa;

  async function searchApi(autoComplete=false){

    const SEARCH_QUERY = `?q=${searchValue}`;    
    const URL = API+SEARCH_QUERY;

    return await axios.get(URL).then(({status,data}) => {       
      if(status === 200){                 
          if(data.length > 0){                                 
            (autoComplete)?setCompanyAutoComplete(data):setCompany(data[0]);              
            return true;
          }

          return false;
        }
      }).catch(err => {
          console.log(err);
          return false;
      });   
  }

  const handleAutoComplete = () => {
    if(searchValue  !== ""){
      searchApi(true);      
    }else{
      setCompanyAutoComplete('');
    }
  }

  const handleSave = () => {
    
    axios.post(API,company,
         {headers: { "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Headers": "Authorization", 
          "Access-Control-Allow-Methods": "GET, POST, OPTIONS, PUT, PATCH, DELETE" ,
          "Content-Type": "application/json"}
        }).then((res)=>{      
          console.log(res);
        if(res.status){
          alert(res.data);
        }

    }).catch( err => {
      console.log(err);
      alert("Erro ao Salvar no Banco de dados");
    });
  }

  async function handleSearch(){                
      const has_result = await searchApi();      
      
      if(has_result === false){        
        await jsonp(RECEITA_URL+searchValue, null, (err, data) => {
          if (err) {
            
          } else {
            if(data.status === "ERROR"){
              alert(data.message);
            }else{
              const response = format_company_data(data,'receita');
              
              setCompany(response);
            }
          }
        });
      }     

      console.log(company);
  }

  const handleSearchList = (value) => {
    setSearchValue(value);
    setCompanyAutoComplete("");
  }

  const handleChangeSearch = (value) => {    
    setSearchValue(value);
    handleAutoComplete(value);    

    if(value === ""){
      setSearchValue('');
      setCompanyAutoComplete('');
    }
  }

  const getAutoCompleteData = () => {        
    if(companyAutoComplete !== ""){      
      return(<SearchList data={companyAutoComplete} onClick={handleSearchList} />)
    }
  }

  const getTableData = () => {
    if(company !== ""){
      return (<>
                <DataTable data={company} />
                <Button className="btn-save" variant="success" onClick={handleSave}>Salvar</Button>
              </>
            )
    }    
  }
  


  return (
    <div className="App">
      <header className="App-header">    
        <Search handleSearch={handleSearch} handleChange={handleChangeSearch} value={searchValue} handleAutoComplete={handleAutoComplete} >                
          {getAutoCompleteData()}
        </Search>
      </header>      
      <section className="box-container">
        {getTableData()}
      </section>
    </div>
  );
}

export default App;
