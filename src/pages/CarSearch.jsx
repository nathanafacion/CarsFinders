import React, { useState } from 'react';
import CarSearchForm from '../components/CarSearchForm/CarSearchForm';
import CarResults from '../components/CarResults/CarResults';
import AiResponse from '../components/AiResponse/AiResponse';

export default function CarSearch() {
	const [searchQuery, setSearchQuery] = useState('');
	const [results, setResults] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [hasSearched, setHasSearched] = useState(false);
	const [aiResponse, setAiResponse] = useState('');

	const handleSearch = async (e) => {
		e.preventDefault();
		if (!searchQuery.trim()) return;

		setIsLoading(true);
		setHasSearched(true);

		try {
			const res = await fetch('http://localhost:4000/api/generate', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ prompt: searchQuery })
			});

			if (!res.ok) throw new Error(`Erro na busca: ${res.status}`);

			const data = await res.json();
      console.log('Resposta da API /api/generate:', data);
      
      if (data) {
				// Tenta fazer parse do campo text como JSON, mesmo se vier com blocos markdown
				try {
					let jsonString = data.text.replace(/```json|```/g, '').trim();
					const parsed = JSON.parse(jsonString);
					console.log("parsed", parsed);
					if (Array.isArray(parsed) && parsed.length > 0 && parsed[0].marca) {
						setResults(parsed);
						setAiResponse('');
						return;
					}
				} catch (e) {
					// Não é JSON válido, segue para exibir como texto
				}
				setResults([]);
				setAiResponse(data.text || 'Nenhum resultado encontrado.');
			} else {
				setResults([]);
				setAiResponse('Nenhum resultado encontrado.');
			}
		} catch (error) {
			setResults([]);
			setAiResponse('Erro na busca. Tente novamente.');
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<div style={{ minHeight: '100vh', background: '#fff', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: 20 }}>
			<header style={{ width: '100%', maxWidth: 1200, padding: '20px 0', textAlign: 'center', marginBottom: 20 }}>
				<h1 style={{ fontSize: 48, color: '#1b5e20', fontWeight: 300, marginBottom: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 16, lineHeight: 1 }}>
					CarFinder <span style={{ fontSize: 64, color: '#4caf50', display: 'flex', alignItems: 'center', lineHeight: 1 }}>🚗</span>
				</h1>
			</header>
			<CarSearchForm searchQuery={searchQuery} setSearchQuery={setSearchQuery} handleSearch={handleSearch} />
			{isLoading && <div style={{ textAlign: 'center', color: '#5f6368', fontSize: 16, marginTop: 20 }}>Buscando carros...</div>}
			{hasSearched && !isLoading && results.length === 0 && !aiResponse && (
				<div style={{ textAlign: 'center', color: '#5f6368', fontSize: 16, marginTop: 40 }}>Nenhum carro encontrado para sua busca.</div>
			)}
			<CarResults results={results} />
			<AiResponse aiResponse={aiResponse} />
		</div>
	);
}
