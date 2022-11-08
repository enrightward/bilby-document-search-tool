import {
    MainDocumentCardDiv,
    MainDocumentCardHeader,
    MainDocumentCardBody,
    MainDocumentCardColumn,
    MainDocumentCardTitle,
    MainDocumentCardExpandButton,
    MainDocumentCardCentre,
} from "./main-document-card-styles.js"

export default function MainDocumentCard( { enTitle, enText, zhTitle, zhText, setShowDocumentModal } ) {

    const handleExpand = () => {
        console.log("expand")
        setShowDocumentModal(true)
    }

    return (
        <MainDocumentCardDiv>
            <MainDocumentCardHeader>
                <MainDocumentCardExpandButton onClick={handleExpand}>
                    expand
                </MainDocumentCardExpandButton>
            </MainDocumentCardHeader>
            <MainDocumentCardBody>
                <MainDocumentCardCentre>
                    <MainDocumentCardColumn>
                    <MainDocumentCardTitle>
                        {enTitle}
                    </MainDocumentCardTitle>
                        {enText}
                    </MainDocumentCardColumn>
                    <MainDocumentCardColumn>
                    <MainDocumentCardTitle>
                        {zhTitle}
                    </MainDocumentCardTitle>
                    {zhText}
                    </MainDocumentCardColumn>
                </MainDocumentCardCentre>
            </MainDocumentCardBody>
        </MainDocumentCardDiv>
    )
}