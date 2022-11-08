import {
    MainDocumentCentreCardHeader,
    MainDocumentCentreCardExpandButton,
} from "./main-document-centre-card-styles.js"

import MainDocumentCard from "./MainDocumentCard.jsx"

export default function MainDocumentCentreCard( { enTitle, enText, zhTitle, zhText, setShowDocumentModal } ) {
    const height = "100%"
    const width = "95%"
    const headerPadding = "1.15rem"
    const columnGap = "0.8rem"
    const topPadding = "0.5rem"
    const uPadding = "0.8rem"
    const bodyPadding = `${topPadding} ${uPadding} ${uPadding} ${uPadding}`
    const docProps = {enTitle, enText, zhTitle, zhText, height, width, headerPadding, columnGap, bodyPadding}

    function Header() {
        const handleExpand = () => {
            console.log("expand")
            setShowDocumentModal(true)
        }
    
        return (
            <MainDocumentCentreCardHeader headerPadding={headerPadding}>
                <MainDocumentCentreCardExpandButton onClick={handleExpand}>
                    expand
                </MainDocumentCentreCardExpandButton>
            </MainDocumentCentreCardHeader>
        )
    }

    return (
        <MainDocumentCard {...docProps} header={Header}/>
    )
}