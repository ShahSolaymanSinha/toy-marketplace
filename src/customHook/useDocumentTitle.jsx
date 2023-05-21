import { useEffect, useState } from "react";

const useDocumentTitle = (title) => {
    const [document_title, setDocumentTitle] = useState(title);
    useEffect(() => {
        document.title = `Speedy Sports | ${document_title}`;
    }, [document_title]);
};

export default useDocumentTitle;
