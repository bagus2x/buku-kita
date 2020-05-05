import React, { useState, useEffect } from 'react';
import Input, { Label } from '../../atoms/Input/Input';

const Steps = (props) => {

    const { step, getFormValue} = props;
    let initialFormValue = {
        username: '',
        email: '',
        telephonenumber: '',
        address: '',
        password: '',
        password2: ''
    }
    const [formValue, setFormValue] = useState(initialFormValue)
    
    const handleInput = (e) => {
        setFormValue({...formValue, [e.target.name] : e.target.value})
    }
    useEffect(() => {
        console.log('ok')
    }, [])
    useEffect(() => {
        getFormValue(formValue);
    }, [formValue])

    switch(step) {
        case 0:
            return(
                <>
                    <Label id="username" title="Nama Pengguna">
                        <Input value={formValue.username} onChange={ handleInput } variant="line" />
                    </Label>
                        <Label id="email" title="Email">
                        <Input type="email" value={formValue.email} onChange={ handleInput } variant="line" />
                    </Label>
                </>
            )
        case 1:
            return(
                <>
                    <Label id="telephonenumber" title="No Handphone">
                        <Input value={formValue.telephonenumber} onChange={ handleInput } variant="line" />
                    </Label>
                        <Label id="address" title="Alamat">
                        <Input value={formValue.address} onChange={ handleInput } variant="line" />
                    </Label>
                </>
            )
        case 2:
            return(
                <>
                    <Label id="password" title="Password">
                        <Input value={formValue.password} onChange={ handleInput } variant="line" />
                    </Label>
                        <Label id="password2" title="Konfirmasi">
                        <Input value={formValue.password2} onChange={ handleInput } variant="line" />
                    </Label>
                </>
            )
    }

    return ''
}

export default Steps;