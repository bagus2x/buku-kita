import React from 'react';
import Button from '../../atoms/Button/Button';
import Input, { Label, Alert } from '../../atoms/Input/Input';
import TopNav from '../../atoms/TopNav/TopNav';

const Components = () => {

    return (
        <>
            <TopNav variant="white" >
                
            </TopNav>
            <div style={{padding: '20px', width: '500px'}}>
                <h1>Button</h1>
                <Button variant="primary">
                    PRIMARY
                </Button>
                <Button variant="secondary">
                    SECONDARY
                </Button>
                <Button variant="default">
                    DEFAULT
                </Button>
                <Button variant="warning">
                    WARNING
                </Button>
                <Button variant="danger">
                    DANGER
                </Button>
                <Button variant="link">
                    LINK
                </Button>

                <hr/>

                <h1>Input</h1>
                <Label id="example1" title="Example 1">
                    <Input variant="line" />
                    <Alert text="erro" />
                </Label>
                <Label id="example2" title="Example 2">
                    <Input variant="line" />
                </Label>
                <Label id="example2" title="Example 2">
                    <Input variant="line" />
                </Label>
                <Label id="example2" title="Example 2">
                    <Input variant="line" />
                </Label>
                <Input variant="full-border" placeholder="full-border" />
            </div>
        </>
    )
}

export default Components;