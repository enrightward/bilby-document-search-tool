import {
    MainDocumentModalContainer,
    MainDocumentModalDiv,
    MainDocumentModalHeader,
    MainDocumentModalBody,
    MainDocumentModalColumn,
    MainDocumentModalTitle,
    MainDocumentModalCancelButton,
    MainDocumentModalCentre,
} from "./document-modal-styles.js"

export default function MainDocumentModal( { enTitle, enText, zhTitle, zhText, show, setShow } ) {

    const handleClose = () => {
        setShow(false)
    }

    let component 
    
    if (show) {
        component = (
            <MainDocumentModalContainer>
                <MainDocumentModalDiv>
                    <MainDocumentModalHeader>
                        <MainDocumentModalCancelButton onClick={handleClose}>
                            cancel
                        </MainDocumentModalCancelButton>
                    </MainDocumentModalHeader>
                    <MainDocumentModalBody>
                        <MainDocumentModalCentre>
                            <MainDocumentModalColumn>
                            <MainDocumentModalTitle>
                                {enTitle}
                            </MainDocumentModalTitle>
                                {enText}
                            </MainDocumentModalColumn>
                            <MainDocumentModalColumn>
                            <MainDocumentModalTitle>
                                {zhTitle}
                            </MainDocumentModalTitle>
                            {zhText}
                            </MainDocumentModalColumn>
                        </MainDocumentModalCentre>
                    </MainDocumentModalBody>
                </MainDocumentModalDiv>
            </MainDocumentModalContainer>
        )
    } else {
        component = null
    }

    return component
}