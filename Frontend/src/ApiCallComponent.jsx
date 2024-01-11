// ApiCallComponent.jsx
import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  margin: 20px;
`;

const TextArea = styled.textarea`
  width: 100%;
  height: 100px;
  margin-bottom: 10px;
`;

const Button = styled.button`
  padding: 10px;
  background-color: #007bff;
  color: #fff;
  cursor: pointer;
`;

const ApiCallComponent = () => {
  const [inputText, setInputText] = useState('');
  const [apiResponse, setApiResponse] = useState('');

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const handleApiCall = () => {
    // Make the API call here using inputText
    // You can use fetch, axios, or any other library for making API calls

    // Example using fetch
    fetch('http://10.245.3.26:5000/api/echo', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ data: inputText }),
    })
      .then(response => response.json())
      .then(data => {
        // Handle the API response data
        setApiResponse(data.response); // Assuming the response has a property named 'response'
      })
      .catch(error => {
        // Handle errors
        console.error('Error:', error);
      });
  };

  return (
    <Container>
      <TextArea
        value={inputText}
        onChange={handleInputChange}
        placeholder="Enter text..."
      />
      <Button onClick={handleApiCall}>Make API Call</Button>
      <TextArea
        value={apiResponse}
        readOnly
        placeholder="API Response will be displayed here..."
      />
    </Container>
  );
};

export default ApiCallComponent;
