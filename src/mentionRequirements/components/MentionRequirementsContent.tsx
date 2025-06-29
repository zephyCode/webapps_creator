import { useState, useRef } from 'react';
import backgroundImg from '../../assets/images/landing_page_img.jpg';
import axios from 'axios';

const MentionRequirementsContent = () => {
	const [selectedFile, setSelectedFile] = useState<File | null>(null);
	const [isUploading, setIsUploading] = useState(false);
	const [uploadStatus, setUploadStatus] = useState<'idle' | 'success' | 'error'>('idle');
	const fileInputRef = useRef<HTMLInputElement>(null);

	const onFileChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
		if (event.target.files && event.target.files.length > 0) {
			setSelectedFile(event.target.files[0]);
			setUploadStatus('idle');
		}
	};

	const uploadFileBtnClickHandler = async () => {
		if (!selectedFile || isUploading) {
			return;
		}

		setIsUploading(true);
		setUploadStatus('idle');

		try {
			const formData = new FormData();
			formData.append("file", selectedFile, selectedFile.name);
			
			const response = await axios.post('http://localhost:3000/api/upload', formData);

			if (response.statusText) {
				const result = await response.data;
				console.log("Upload successful:", result);
				setUploadStatus('success');
			
				setSelectedFile(null);
				if (fileInputRef.current) {
					fileInputRef.current.value = '';
				}
			} else {
				throw new Error(`Upload failed with status: ${response.status}`);
			}
		} catch (error) {
			console.error('Upload error:', error);
			setUploadStatus('error');
		} finally {
			setIsUploading(false);
		}
	};

	const getButtonText = () => {
		if (isUploading) return 'Uploading...';
		if (!selectedFile) return 'Select a File';
		return 'Upload File';
	};

	const getButtonClass = () => {
		const baseClass = "font-medium px-6 py-3 rounded-md transition duration-300 w-full sm:w-auto";
		
		if (isUploading) {
			return `${baseClass} bg-gray-400 text-white cursor-not-allowed`;
		}
		
		if (!selectedFile) {
			return `${baseClass} bg-gray-400 text-white cursor-not-allowed`;
		}
		
		return `${baseClass} bg-indigo-600 text-white hover:bg-indigo-700`;
	};

	return (
		<div
			className="bg-cover bg-center bg-no-repeat min-h-screen flex items-center justify-center px-4 sm:px-8 md:px-16 py-24"
			style={{ 
				backgroundImage: `url(${backgroundImg})`,
				paddingTop: '8rem' 
			}}
		>
			<div className="flex flex-col lg:flex-row items-center justify-center gap-8 w-full max-w-7xl">
				<div className="bg-white/50 backdrop-blur-md p-6 sm:p-8 lg:p-10 rounded-lg w-full max-w-2xl shadow-lg flex flex-col items-center justify-center text-center gap-4 min-h-[200px]">
					<p className="text-base sm:text-lg text-gray-700">
						Upload file in formats <strong>.xlsx</strong>, <strong>.csv</strong> only.
					</p>

					<input
						ref={fileInputRef}
						type="file"
						onChange={onFileChangeHandler}
						accept=".xlsx .csv"
						className="text-sm block w-full text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100"
						disabled={isUploading}
					/>

					{selectedFile && (
						<div className="text-sm text-gray-600 bg-gray-100 px-3 py-2 rounded-md w-full">
							<strong>Selected:</strong> {selectedFile.name} ({(selectedFile.size / 1024).toFixed(1)} KB)
						</div>
					)}

					{uploadStatus === 'success' && (
						<div className="text-sm text-green-600 bg-green-100 px-3 py-2 rounded-md w-full">
							✅ File uploaded successfully!
						</div>
					)}
					
					{uploadStatus === 'error' && (
						<div className="text-sm text-red-600 bg-red-100 px-3 py-2 rounded-md w-full">
							❌ Upload failed. Please try again.
						</div>
					)}

					<button
						className={getButtonClass()}
						onClick={uploadFileBtnClickHandler}
						disabled={!selectedFile || isUploading}
					>
						{getButtonText()}
					</button>

					{isUploading && (
						<div className="flex items-center justify-center">
							<div className="animate-spin rounded-full h-6 w-6 border-b-2 border-indigo-600"></div>
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default MentionRequirementsContent;