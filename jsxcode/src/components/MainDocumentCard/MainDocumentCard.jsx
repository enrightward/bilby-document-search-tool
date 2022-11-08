import {
    MainDocumentCardDiv,
    MainDocumentCardBody,
    MainDocumentCardColumn,
    MainDocumentCardTitle,
    MainDocumentCardCentre,
} from "./main-document-card-styles.js"

export default function MainDocumentCard( 
        { 
            enTitle, 
            enText, 
            zhTitle, 
            zhText, 
            width, 
            height, 
            columnGap, 
            bodyPadding, 
            header: Header 
        } 
    ) {

    return (
        <MainDocumentCardDiv height={height} width={width} >
            <Header/>
            <MainDocumentCardBody bodyPadding={bodyPadding}>
                <MainDocumentCardCentre columnGap={columnGap}>
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