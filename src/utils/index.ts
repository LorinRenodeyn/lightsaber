export const toSlug = (text: string) => text.toLowerCase().replace(/\s+/, '-');
export const isOnPath = (path: string, reference: string) =>{
	if (!path) return false
	if (reference === '/') return path === reference;
	return new RegExp(reference, 'i').test(path);
}
