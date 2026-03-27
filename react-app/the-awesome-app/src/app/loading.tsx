export default function Loading() {
    return (
        <div className="alert alert-info">
            <div className="d-flex align-items-center">
                <div className="spinner-border me-3" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
                <div>
                    <h4>Loading...</h4>
                    <p>Please wait while the content is being loaded.</p>
                </div>
            </div>
        </div>
    )
}