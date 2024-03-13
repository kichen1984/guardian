import { BlockValidator, IBlockProp } from '../../block-validators';
import { CommonBlock } from './common.js';

/**
 * Document action clock with UI
 */
export class ExtractDataBlock {
    /**
     * Block type
     */
    public static readonly blockType: string = 'extractDataBlock';

    /**
     * Validate block options
     * @param validator
     * @param config
     */
    public static async validate(validator: BlockValidator, ref: IBlockProp): Promise<void> {
        try {
            await CommonBlock.validate(validator, ref);
        } catch (error) {
            validator.addError(
                `Unhandled exception ${validator.getErrorMessage(error)}`
            );
        }
    }
}
