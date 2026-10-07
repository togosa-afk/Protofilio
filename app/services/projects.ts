import data from '@/asset/data.json'


export const getById = (id: string) => {
    const project = data.find(d => d.id === id)
    return project
}