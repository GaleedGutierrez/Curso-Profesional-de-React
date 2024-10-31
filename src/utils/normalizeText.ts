function normalizeText(text: string): string {
	const REGEX = new RegExp(/[\u0300-\u036F]/, 'g');

	return text.normalize('NFD').replaceAll(REGEX, '').trim();
}

export default normalizeText;
