export interface CategoryResultSectionDTO {
    success: boolean;
    status: string;
    code: number;
    message: string;
    results: CategoryResultItemDTO[];
}
export interface CategoryResultItemDTO {
    id: number;
    categoryName: string;
    imageCategory: string | 'MUDO';
    titleImageUrl: string;
    lastMemeImageRegistTime: string;
}
