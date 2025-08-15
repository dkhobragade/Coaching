import { useState } from "react";
import { Box, Stack, Typography } from "@mui/material";
import InputField from "../lowLevelComponent/InputField";
import { PDFType } from "@/lib/props";
import Button from "../lowLevelComponent/Button";

export default function AddPDF ()
{
    const [ formData, setFormData ] = useState<PDFType>( {
        name: '',
        description: '',
        tags: '',
        price: ''
    } )

    const onChangeName = ( e: React.ChangeEvent<HTMLInputElement> ) =>
    {
        setFormData( prev => ( { ...prev, name: e.target.value } ) );
    }

    const onChangeDescription = ( e: React.ChangeEvent<HTMLInputElement> ) =>
    {
        setFormData( prev => ( { ...prev, description: e.target.value } ) );
    }

    const onChangeTags = ( e: React.ChangeEvent<HTMLInputElement> ) =>
    {
        setFormData( prev => ( { ...prev, tags: e.target.value } ) );
    }

    const onChangePrice = ( e: React.ChangeEvent<HTMLInputElement> ) =>
    {
        setFormData( prev => ( { ...prev, price: e.target.value } ) );
    }

    return <Box>
        <Typography fontSize={ 25 } fontWeight={ 600 } >
            Add PDF
        </Typography>
        <Stack>
            <InputField value={ formData.name } onChange={ onChangeName } label="PDF Name" />
            <InputField value={ formData.description } onChange={ onChangeDescription } label="Description" />
            <InputField value={ formData.tags } onChange={ onChangeTags } label="Tags" />
            <InputField value={ formData.price } onChange={ onChangePrice } label="Price" />
            <Box display="flex" gap={ 2 } >
                <Button label="Add Image" fullWidth variant="contained" />
                <Button label="Submit" fullWidth variant="contained" />
            </Box>
        </Stack>
    </Box>
}