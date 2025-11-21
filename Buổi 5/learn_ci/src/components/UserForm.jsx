import React from 'react';
import { Button, Checkbox, Form, Input, Switch, Radio, Select } from 'antd';
import { useState } from 'react';
const UserForm = () => {
  const [check, setChecked] = useState(false);
  const onFinish = values => {
    console.log('Success:', values);
  };
  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };
  return (<div className="w-[760px] p-[100px] bg-white">
    <Form
      name="basic"
      style={{ maxWidth: 600 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="Username"
        name="username"
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        label="Input Text Lable"
        name="text"
        validateStatus="error"
        help="Should be combination of numbers & alphabets">
        <Input />
      </Form.Item>

      <Form.Item name="remember" valuePropName="checked" label={null}>
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item name="status" label={null}>
        <Switch checked={check} onChange={setChecked} />
        <span> {check ? "On" : "Off"}</span>
      </Form.Item>

      <Form.Item name="radio" label={null}>
        <Radio.Group
          className="flex flex-col"
          options={[
            { value: 1, label: 'Option A' },
            { value: 2, label: 'Option B' },
            { value: 3, label: 'Option C' },
          ]}
        />
      </Form.Item>

      <Form.Item name="dropdown-option" label={null}>
        <Select
          defaultValue="1"
          options={[
            { value: '1', label: 'Dropdown option 1' },
            { value: '2', label: 'Dropdown option 2' },
            { value: '3', label: 'Dropdown option 3' },
          ]}
        />
      </Form.Item>

      <Form.Item label={null}>
        <div className="justify-between flex">
          <Button type="primary" htmlType="submit">
            Cancel
          </Button>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </div>
      </Form.Item>
    </Form>
  </div>)

};
export default UserForm;