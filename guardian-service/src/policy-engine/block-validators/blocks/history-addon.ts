import { BlockValidator, IBlockProp } from '../../block-validators';
import { CommonBlock } from './common.js';

/**
 * History Addon
 */
export class HistoryAddon {
    /**
     * Block type
     */
    public static readonly blockType: string = 'historyAddon';

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
