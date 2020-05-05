import React from 'react';
import Input, { Label } from '../../atoms/Input/Input';

const Steps = (props) => {

    const { step } = props;

    switch(step) {
        case 0:
            return(
                <>
                    <Label id="username" title="Nama Pengguna">
                        <Input variant="line" />
                    </Label>
                        <Label id="email" title="Email">
                        <Input variant="line" />
                    </Label>
                </>
            )
        case 1:
            return(
                <>
                    <Label id="telephonenumber" title="No Handphone">
                        <Input variant="line" />
                    </Label>
                        <Label id="address" title="Alamat">
                        <Input variant="line" />
                    </Label>
                </>
            )
        case 2:
            return(
                <>
                    <Label id="password" title="Password">
                        <Input variant="line" />
                    </Label>
                        <Label id="password2" title="Konfirmasi">
                        <Input variant="line" />
                    </Label>
                </>
            )
    }

    return ''
}

export default Steps;