import {
    MainDocumentModalContainer,
    MainDocumentModalHeader,
    MainDocumentModalCancelButton,
} from "./main-document-modal-styles.js"

import MainDocumentCard from "./MainDocumentCard.jsx"

export default function MainDocumentModal( 
    { 
        enTitle, 
        enText, 
        zhTitle, 
        zhText, 
        show, 
        setShowDocumentModal 
    } ) {
    const height = "80%"
    const width = "min(80%, 900px)"
    const headerPadding = "1.15rem"
    const columnGap = "1.5rem"
    const topPadding = "0.5rem"
    const uPadding = "1.5rem"
    const bodyPadding = `${topPadding} ${uPadding} ${uPadding} ${uPadding}`
    const docProps = {enTitle, enText, zhTitle, zhText, height, width, headerPadding, columnGap, bodyPadding}

    function Header() {
        const handleClose = () => {
            console.log("cancel")
            setShowDocumentModal(false)
        }
    
        return (
            <MainDocumentModalHeader headerPadding={headerPadding}>
                <MainDocumentModalCancelButton onClick={handleClose}>
                    cancel
                </MainDocumentModalCancelButton>
            </MainDocumentModalHeader>
        )
    }

    let component 
    
    if (show) {
        component = (
            <MainDocumentModalContainer>
                <MainDocumentCard {...docProps} header={Header}/>
            </MainDocumentModalContainer>
        )
    } else {
        component = null
    }

    return component
}