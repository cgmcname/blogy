import React from 'react';
import { Form, Input, Button } from 'antd';
//import CustomLayout from '../containers/Layout';

import axios from 'axios';

class CustomForm extends React.Component  {

    handleFormSubmit = (event, requestType, articleID) => {

        

        const title = event.target.elements.title.value;
        const content = event.target.elements.content.value;

        switch (requestType) {

            case 'post':
               return axios.post('https://blogythe.herokuapp.com/api/', {
                    title: title,
                    content: content
                })
                .then(res => {console.log(res); window.location.reload();})
                .catch(error => console.err(error));
            case 'put':
              return  axios.put(`https://blogythe.herokuapp.com/api/${articleID}/`, {
                    title: title,
                    content: content
                })
                .then(res => {console.log(res); window.location.reload();})
                .catch(error => console.err(error));

        }


    }


  render() {
        return (
            <div>
            <Form onSubmitCapture={(event) => this.handleFormSubmit(
                event,
                this.props.requestType,
                this.props.articleID )}> 
                <Form.Item label="Title"></Form.Item>
                <Form.Item ><Input name="title" placeholder="Put a title here" /></Form.Item>
                <Form.Item label="Content"></Form.Item>
                <Form.Item ><Input name="content" placeholder="Enter some content ..." /></Form.Item>
                <Form.Item>
            <Button type="primary" htmlType="submit">{this.props.btnText}</Button>
                </Form.Item>
            </Form>
            </div>
        );
    }
};

export default CustomForm;


